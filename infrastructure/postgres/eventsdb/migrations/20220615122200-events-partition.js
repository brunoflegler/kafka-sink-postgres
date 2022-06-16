const tableName = 'Events'

module.exports = {
  up (queryInterface, DataTypes) {
    return queryInterface.sequelize.query(`
      CREATE TABLE public."${tableName}" (
        id varchar(255) NOT NULL,
        company_id varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        referer public."enum_Events_referer" NOT NULL,
        model varchar(255) NOT NULL,
        model_id varchar(255) NOT NULL,
        payload text NOT NULL,
        internal bool NOT NULL,
        json_payload jsonb NULL,
        "version" text NULL,
        created_at timestamptz NOT NULL,
        updated_at timestamptz NOT NULL
      ) PARTITION BY RANGE (created_at);
    `)
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}
