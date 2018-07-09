require('dotenv').load();

module.exports = {
  dbUrl: 'mongodb://'+  process.env.MONGO_USERNAME +':'+ process.env.MONGO_USERPASS +'@' + process.env.AIR_DB_IP +'/' + process.env.MONGO_DB,
  secret:"secret"
}
