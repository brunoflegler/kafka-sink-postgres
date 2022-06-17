const logger = require('../../logger')
const postgresConfig = require('../../../infrastructure/postgres')
const postgresFactory = require('./postgres')

const { livedb: livedbConfig, eventsdb: eventsdbConfig } = postgresConfig

const livedb = postgresFactory({
  config: livedbConfig,
  logger,
})

const eventsdb = postgresFactory({
  config: eventsdbConfig,
  logger,
})


module.exports = {
  livedb,
  eventsdb
}
