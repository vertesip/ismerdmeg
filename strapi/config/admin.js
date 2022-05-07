module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3RL5l0pJ0Y9U6s5ftgZAxg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "1hMttY4xS300XNEP8UtCsQ=="),
  },
});
