#!/bin/bash

status=000

configureSink () {
  response_code=$(curl --write-out '%{http_code}' --silent --output /dev/null -XPOST localhost:8083/connectors/ -H "content-type: application/json" -d '
    {
      "name": "postgres.sink",
      "config": {
        "topics": "core.public.Events",
        "connector.class": "io.confluent.connect.jdbc.JdbcSinkConnector",
        "tasks.max": 1,
        "connection.url": "jdbc:postgresql://postgres2:5432;database=postgres;username=postgres;password=postgres",
        "table.name.format": "Events",
        "auto.create": true
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
