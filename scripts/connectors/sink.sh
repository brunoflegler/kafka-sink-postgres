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
        "connection.url": "jdbc:postgresql://eventsdb:5432/postgres?stringtype=unspecified",
        "connection.user": "postgres",
        "connection.password": "postgres",
        "dialect.name": "PostgreSqlDatabaseDialect",
        "table.name.format": "Events",
        "insert.mode": "insert",
        "auto.create": "true",
        "auto.evolve": "false",
        "transforms": "unwrap",
        "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState",
        "transforms.unwrap.drop.tombstones": "false",
        "tasks.max": "1"
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
