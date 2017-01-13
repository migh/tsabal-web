const autoprefixer = require('autoprefixer');

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./webpack/webpack.prod')({env: 'production', postcss: [autoprefixer]});
    break;
  case 'test':
  case 'testing':
    module.exports = require('./webpack/webpack.test')({env: 'test', postcss: [autoprefixer]});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./webpack/webpack.dev')({env: 'development', postcss: [autoprefixer]});
}
