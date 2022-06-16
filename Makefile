build:
	@docker build -t base .
.PHONY: build

kafka:
	@docker-compose up -d zookeeper kafka schema-registry connect akhq
.PHONY: kafka

postgres1:
	@docker-compose up -d postgres1 
.PHONY: postgres1

postgres2:
	@docker-compose up -d postgres2
.PHONY: postgres2

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

prepare: build postgres1 postgres2 kafka migrations seeders debezium sink
.PHONY: prepare
