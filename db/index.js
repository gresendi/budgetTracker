
const mongoose = require('mongoose')

// export syncDB for database (mongoose connect for mongo db deployed on heroku or local host)
module.exports = async function syncDB() { await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/budget') }