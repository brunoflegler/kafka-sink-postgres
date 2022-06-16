const tableName = 'Events'

module.exports = {
  up (queryInterface, DataTypes) {
    return queryInterface.sequelize.query(`    
      CREATE TABLE public."Events_2021" PARTITION OF public."${tableName}"
        FOR VALUES FROM ('2021-01-01') TO ('2022-01-01');
    `)
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}
