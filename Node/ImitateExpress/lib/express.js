const Application = require('./application');

function express() {
  return new Application();
}

module.exports = express;