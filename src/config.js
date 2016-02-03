const env = process.env.NODE_ENV || 'deployment';

const config = {
  deployment: {
    port: 8000,
  },
  production: {
    port: 8000,
  },
};

export default config[env];
