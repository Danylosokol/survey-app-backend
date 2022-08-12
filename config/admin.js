module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a5905c23ec6149a76006651d64cfb67'),
  },
});
