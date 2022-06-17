const Sequelize = require('sequelize')

function postgresDatabaseFactory ({ config, logger }) {
  function setupConfig () {
    const baseConfig = {
      database: config.database,
      dialect: config.dialect,
      host: config.host,
      password: config.password,
      pool: {
        acquire: 20000,
        handleDisconnects: true,
        idle: 60000,
      },
      username: config.username,
      logging: false,
    }

    if (config.isProd) {
      return baseConfig
    }

    return {
      ...baseConfig,
      define: {
        createdAt: 'created_at',
        timestamps: true,
        updatedAt: 'updated_at',
      },
    }
  }

  const database = new Sequelize(setupConfig())

  async function start () {
    try {
      logger.info({
        message: 'Attempting connection postgres',
      })

      await database.authenticate()

      logger.info({ message: `Postgres ${config.database} connected` })
    } catch (error) {
      logger.error({
        message: 'Cannot authenticate to postgres',
        error: error.message,
        stack: error.stack && error.stack.split('\n'),
      })

      throw error
    }
  }

  async function stop () {
    try {
      logger.info({ message: 'Stopping database' })
      await database.close()
      logger.info({ message: 'Database stopped' })
    } catch (error) {
      logger.error({
        message: 'Cannot stop database',
        error: error.message,
        stack: error.stack && error.stack.split('\n'),
      })

      throw error
    }
  }

  return {
    start,
    stop,
    sequelize: database,
  }
}

module.exports = postgresDatabaseFactory
