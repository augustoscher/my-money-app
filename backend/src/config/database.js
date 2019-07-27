const mongoose = require('mongoose')
mongoose.Promise = global.Promise


//db string connection must contain the service name of mongo. Not use localhost.
module.exports = mongoose.connect('mongodb://db:27017/mymoney');