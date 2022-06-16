const {
  DATABASE_2_NAME,
  DATABASE_2_DIALECT,
  DATABASE_2_HOST,
  DATABASE_2_PASSWORD,
  DATABASE_2_USERNAME,
} = process.env

const postgres = {
  database: DATABASE_2_NAME,
  dialect: DATABASE_2_DIALECT,
  host: DATABASE_2_HOST,
  password: DATABASE_2_PASSWORD,
  seederStorage: 'sequelize',
  username: DATABASE_2_USERNAME,
}

module.exports = postgres
