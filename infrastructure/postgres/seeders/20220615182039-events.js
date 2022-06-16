const tableName = 'Events'

module.exports = {
  up: async (queryInterface, Sequelize) => 
    await queryInterface.bulkInsert(tableName, 
      [
        {
          id: "ev_cj8pzyg181byjvt3sf6980fwt",
          name: "gateway_request_finished",
          referer: "internal",
          company_id: "58ed24ad1982382b0f8462c9",
          model: "transaction",
          model_id: "2231674",
          payload: "{\"id\":\"gr_cj8pzyeom1by5vt3s1kozdcry\",\"status\":\"success\",\"first_processed_operation_id\":\"go_cj8pzyeuu1byavt3so7yxsqq5\",\"last_processed_operation_id\":\"go_cj8pzyfcn1byhvt3sod1tzrxc\",\"metadata\":{\"desiredStatus\":\"paid\",\"failureAction\":\"changeStatus\",\"failureStatus\":\"refused\",\"shouldUpdateCard\":true},\"is_async\":true}",
          internal: true,
          created_at: "2017-10-13T14:37:04.556Z",
          updated_at: "2017-10-13T14:37:04.556Z",
          json_payload: "{\"id\":\"gr_cj8pzyeom1by5vt3s1kozdcry\",\"status\":\"success\",\"first_processed_operation_id\":\"go_cj8pzyeuu1byavt3so7yxsqq5\",\"last_processed_operation_id\":\"go_cj8pzyfcn1byhvt3sod1tzrxc\",\"metadata\":{\"desiredStatus\":\"paid\",\"failureAction\":\"changeStatus\",\"failureStatus\":\"refused\",\"shouldUpdateCard\":true},\"is_async\":true}",
          version: "1"
        }
      ]
    , {}),

  down: async (queryInterface) => await queryInterface.bulkDelete(tableName, null, {}),
};
