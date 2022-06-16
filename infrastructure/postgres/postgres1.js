const {
  DATABASE_1_NAME,
  DATABASE_1_DIALECT,
  DATABASE_1_HOST,
  DATABASE_1_PASSWORD,
  DATABASE_1_USERNAME,
} = process.env

const postgres = {
  database: DATABASE_1_NAME,
  dialect: DATABASE_1_DIALECT,
  host: DATABASE_1_HOST,
  password: DATABASE_1_PASSWORD,
  seederStorage: 'sequelize',
  username: DATABASE_1_USERNAME,
}

module.exports = postgres
