#### Descrição

A POC tem o intuito de simular o conceito de CDC e Sink usando kafka e o postgres como database. Usando debezium conseguimos monitorar todas as alterações do banco `livedb` e enviar para o tópico do kafka. No diretório `scripts` tem os arquivos de configuração do debezium e o sink. O sink é responsável de configurar o conector para enviar as mensagens do tópico para outro database, nesse caso o `eventsdb`.

A POC também valida o uso da mesma versão `sequelize` para conectar versões diferentes de postgres 12 e 14, além de executar as migrations de acordo com cada configuração.

#### Preparar ambiente

Install the dependencies and devDependencies and start the server.

```sh
$ make prepare
```

#### Simular criação de eventos e sincronização entre os bancos

```sh
$ make seeders
```

#### Restrições

O sink conector utilizando tabela particionada existe uma restrição usando a versão da lib postgresql mais rescente. A princípio só funciona na versão 42.2.10 já atualizada no diretório dos conectors.
#### Referências

1. https://docs.confluent.io/cloud/current/connectors/cc-postgresql-sink.html#cc-postgresql-sink

2. https://docs.confluent.io/cloud/current/connectors/cc-postgresql-sink.html

3. https://docs.confluent.io/cloud/current/connectors/cc-postgresql-sink.html#number-of-tasks-for-this-connector

4. https://github.com/confluentinc/kafka-connect-jdbc/issues/921

5. https://github.com/pagarme/data-kafka-connectors/blob/master/s3-sink-data/s3-sink-data-big-four.yml

6. https://stackoverflow.com/questions/4168689/is-it-possible-to-specify-the-schema-when-connecting-to-postgres-with-jdbc

7. https://rmoff.net/2021/03/12/kafka-connect-jdbc-sink-deep-dive-working-with-primary-keys/

8. https://jdbc.postgresql.org/documentation/head/connect.html

9. https://www.confluent.io/hub/confluentinc/kafka-connect-jdbc?_ga=2.187602344.1292032533.1655234655-970951060.1654526343&_gac=1.183366868.1655336440.Cj0KCQjwhqaVBhCxARIsAHK1tiPygVe7-C4ngQsv61u4TXcaS4ji13050DDJsaT-Htx0xyM0VRA1hnwaAtdhEALw_wcB

10. https://github.com/confluentinc/kafka-connect-jdbc/issues/1092