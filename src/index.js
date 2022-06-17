
const {
  postgres,
} = require('./database')

const logger = require('./logger')

async function start () {
  try {
    logger.info({
      message: 'Starting application',
    })

    await postgres.livedb.start()
    await postgres.eventsdb.start()
  } catch (error) {
    logger.error({
      message: 'Unexpected error starting application',
      error: error.message,
      stack: error.stack && error.stack.split('\n'),
    })

    throw error
  }
}

async function stop () {
  try {
    logger.info({
      message: 'Stopping application',
    })
  } catch (error) {
    logger.error({
      message: 'Unexpected error stopping application',
      error: error.message,
      stack: error.stack && error.stack.split('\n'),
    })

    throw error
  }
}

async function main () {
  try {
    await start()

    logger.info({
      message: 'Starting application successful',
    })
  } catch (error) {
    logger.fatal({
      message: 'Unexpected application behavior',
      error: error.message,
      stack: error.stack && error.stack.split('\n'),
    })

    throw error
  }
}

main()
