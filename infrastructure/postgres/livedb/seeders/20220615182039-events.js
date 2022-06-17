const tableName = 'Events'

module.exports = {
  up: async (queryInterface, Sequelize) => 
    await queryInterface.bulkInsert(tableName, 
      [
        {
          id: "ev_cj8pzyg181byjvt3sf6980fwt",
          name: "gateway_request_finished",
          referer: "internal",
          company_id: "58ed24ad1982382b0111111c9",
          model: "transaction",
          model_id: "2231674",
          payload: "{\"id\":\"gr_1\"}",
          internal: true,
          created_at: "2021-10-13T14:37:04.556Z",
          updated_at: "2021-10-13T14:37:04.556Z",
          json_payload: "{\"id\":\"gr_1\"}",
          version: "1"
        }
      ]
    , {}),

  down: async (queryInterface) => await queryInterface.bulkDelete(tableName, null, {}),
};
