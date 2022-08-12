module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});


// heroku config:set MY_HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)
// heroku config:set APP_KEYS=$(cat .env | grep APP_KEYS | cut -d= -f2-)
// heroku config:set API_TOKEN_SALT=$(cat .env | grep API_TOKEN_SALT | cut -d= -f2)
// heroku config:set ADMIN_JWT_SECRET=$(cat .env | grep ADMIN_JWT_SECRET | cut -d= -f2)
// heroku config:set JWT_SECRET=$(cat .env | grep -w JWT_SECRET | cut -d= -f2)