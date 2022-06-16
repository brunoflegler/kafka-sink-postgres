const tableName = 'Events'

module.exports = {
  up (queryInterface, DataTypes) {
    return queryInterface.sequelize.query(`
      ALTER TABLE ONLY public."${tableName}" ADD UNIQUE (id, created_at);
    `)
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}
