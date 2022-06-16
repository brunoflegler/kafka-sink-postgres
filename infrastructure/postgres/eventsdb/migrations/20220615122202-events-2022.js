const tableName = 'Events'

module.exports = {
  up (queryInterface, DataTypes) {
    return queryInterface.sequelize.query(`    
      CREATE TABLE public."Events_2022" PARTITION OF public."${tableName}"
        FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');
    `)
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}
