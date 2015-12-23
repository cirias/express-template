var env = process.env.NODE_ENV || 'deployment';

var config = {
  deployment: {
    port: 8000
  },
  production: {
    port: 8000
  }
};

module.exports = config[env];
