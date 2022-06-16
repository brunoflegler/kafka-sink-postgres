const {
  LIVE_DB_NAME,
  LIVE_DB_DIALECT,
  LIVE_DB_HOST,
  LIVE_DB_PASSWORD,
  LIVE_DB_USERNAME,
} = process.env

const postgres = {
  database: LIVE_DB_NAME,
  dialect: LIVE_DB_DIALECT,
  host: LIVE_DB_HOST,
  password: LIVE_DB_PASSWORD,
  seederStorage: 'sequelize',
  username: LIVE_DB_USERNAME,
}

module.exports = postgres
