#!/bin/bash

status=000

configureSink () {
  response_code=$(curl --write-out '%{http_code}' --silent --output /dev/null -XPOST localhost:8083/connectors/ -H "content-type: application/json" -d '
    {
      "name": "postgres.sink",
      "config": {
        "topics": "core.public.Events",
        "connector.class": "io.confluent.connect.jdbc.JdbcSinkConnector",
        "input.data.format": "AVRO",
        "connection.url": "jdbc:postgresql://postgres2:5432/postgres",
        "connection.host": "postgres2",
        "connection.port": "5432",
        "connection.user": "postgres",
        "connection.password": "postgres",
        "db.name": "postgres",
        "dialect.name": "PostgreSqlDatabaseDialect",
        "table.name.format": "Events",
        "insert.mode": "insert",
        "db.timezone": "UTC",
        "auto.create": "true",
        "auto.evolve": "true",
        "transforms": "unwrap",
        "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState",
        "transforms.unwrap.drop.tombstones": "false",
        "transforms.unwrap.add.fields": "op,source.ts_ms",
        "tasks.max": "1",
        "timezone": "UTC"
      }
    }
  ');

  echo "$response_code"
}

while [ "$status" != 201 ] | [ "$status" != 409 ];
  do
    echo "Trying to configure sink"
    status=$(configureSink)
    sleep 5
  done

echo "Sink configured"
