const {
  EVENTS_DB_NAME,
  EVENTS_DB_DIALECT,
  EVENTS_DB_HOST,
  EVENTS_DB_PASSWORD,
  EVENTS_DB_USERNAME,
} = process.env

const postgres = {
  database: EVENTS_DB_NAME,
  dialect: EVENTS_DB_DIALECT,
  host: EVENTS_DB_HOST,
  password: EVENTS_DB_PASSWORD,
  seederStorage: 'sequelize',
  username: EVENTS_DB_USERNAME,
}

module.exports = postgres
