const tableName = 'Events'

module.exports = {
  up (queryInterface, DataTypes) {
    return queryInterface.sequelize.query(`
      CREATE TYPE public."enum_Events_referer" AS ENUM (
        'internal',
        'external');
    `)
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}
