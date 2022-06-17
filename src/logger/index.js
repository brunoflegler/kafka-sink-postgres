const logger = require('./logger')

module.exports = logger({ 
  config: {
    app: {
      name: 'kafka-sink-postgres'
    }
  }  
})
