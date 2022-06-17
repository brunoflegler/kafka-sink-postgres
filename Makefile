build:
	@docker build -t base .
.PHONY: build

kafka:
	@docker-compose up -d zookeeper kafka schema-registry connect akhq
.PHONY: kafka

livedb:
	@docker-compose up -d livedb 
.PHONY: livedb

eventsdb:
	@docker-compose up -d eventsdb
.PHONY: eventsdb

debezium:
	./scripts/connectors/debezium.sh
.PHONY: connectors

sink:
	./scripts/connectors/sink.sh
.PHONY: connectors

migrations:
	@docker-compose run --rm kafka-sink-postgres npm run migrations
.PHONY: migrate

seeders:
	@docker-compose run --rm kafka-sink-postgres npm run seeders
.PHONY: seeders

kafka-sink-postgres:
	@docker-compose up -d --build kafka-sink-postgres
.PHONY: kafka-sink-postgres

prepare: build livedb eventsdb kafka migrations debezium sink kafka-sink-postgres
.PHONY: prepare
