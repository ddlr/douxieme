const Middleware_Core = require('./lib/Middleware.js')
// TODO: connect to some database

class Middleware extends Middleware_Core {
  async checkUser(userID) {
    const blacklisted = false
    // blacklisted = whether user in blacklist database
    return !!blacklisted
  }
}

module.exports = Middleware