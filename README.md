download: https://docs.confluent.io/cloud/current/connectors/cc-postgresql-sink.html#cc-postgresql-sink


INSERT INTO test."Events"
(id, name, referer, company_id, model, model_id, payload, internal, created_at, updated_at, json_payload, "version")
VALUES('ev_cj8pzyg181byjvt3sf6980fwt', 'gateway_request_finished', 'internal', '58ed24ad1982382b0f8462c9', 'transaction', '2231674', '{"id":"gr_cj8pzyeom1by5vt3s1kozdcry","status":"success","first_processed_operation_id":"go_cj8pzyeuu1byavt3so7yxsqq5","last_processed_operation_id":"go_cj8pzyfcn1byhvt3sod1tzrxc","metadata":{"desiredStatus":"paid","failureAction":"changeStatus","failureStatus":"refused","shouldUpdateCard":true},"is_async":true}', true, '2017-10-13 11:37:04.556', '2017-10-13 11:37:04.556', NULL, NULL);


https://docs.confluent.io/cloud/current/connectors/cc-postgresql-sink.html

https://docs.confluent.io/cloud/current/connectors/cc-postgresql-sink.html#number-of-tasks-for-this-connector

https://github.com/confluentinc/kafka-connect-jdbc/issues/921

https://github.com/pagarme/data-kafka-connectors/blob/master/s3-sink-data/s3-sink-data-big-four.yml

https://stackoverflow.com/questions/4168689/is-it-possible-to-specify-the-schema-when-connecting-to-postgres-with-jdbc


https://rmoff.net/2021/03/12/kafka-connect-jdbc-sink-deep-dive-working-with-primary-keys/

https://jdbc.postgresql.org/documentation/head/connect.html

https://www.confluent.io/hub/confluentinc/kafka-connect-jdbc?_ga=2.187602344.1292032533.1655234655-970951060.1654526343&_gac=1.183366868.1655336440.Cj0KCQjwhqaVBhCxARIsAHK1tiPygVe7-C4ngQsv61u4TXcaS4ji13050DDJsaT-Htx0xyM0VRA1hnwaAtdhEALw_wcB

https://github.com/confluentinc/kafka-connect-jdbc/issues/1092