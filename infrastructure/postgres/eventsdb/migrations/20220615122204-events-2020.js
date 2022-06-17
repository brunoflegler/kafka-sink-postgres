const tableName = 'Events'

module.exports = {
  up (queryInterface, DataTypes) {
    return queryInterface.sequelize.query(`    
      CREATE TABLE public."Events_2020" PARTITION OF public."${tableName}"
        FOR VALUES FROM ('2020-01-01') TO ('2021-01-01');
    `)
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}
