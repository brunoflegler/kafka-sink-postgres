const tableName = 'Events'

module.exports = {
  up (queryInterface, DataTypes) {
    return queryInterface.createTable(tableName, {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      company_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      referer: {
        type: DataTypes.ENUM('internal', 'external'),
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payload: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      internal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      json_payload: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      version: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    })
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}
