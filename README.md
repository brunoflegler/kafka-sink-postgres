download: https://docs.confluent.io/cloud/current/connectors/cc-postgresql-sink.html#cc-postgresql-sink


INSERT INTO test."Events"
(id, name, referer, company_id, model, model_id, payload, internal, created_at, updated_at, json_payload, "version")
VALUES('ev_cj8pzyg181byjvt3sf6980fwt', 'gateway_request_finished', 'internal', '58ed24ad1982382b0f8462c9', 'transaction', '2231674', '{"id":"gr_cj8pzyeom1by5vt3s1kozdcry","status":"success","first_processed_operation_id":"go_cj8pzyeuu1byavt3so7yxsqq5","last_processed_operation_id":"go_cj8pzyfcn1byhvt3sod1tzrxc","metadata":{"desiredStatus":"paid","failureAction":"changeStatus","failureStatus":"refused","shouldUpdateCard":true},"is_async":true}', true, '2017-10-13 11:37:04.556', '2017-10-13 11:37:04.556', NULL, NULL);