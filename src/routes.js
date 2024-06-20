const path = require('path');
const {
  getRootHandler, getLostHandler,
} = require('./handler');

const routes = [
  {
    path: '/',
    method: 'GET',
    handler: getRootHandler,
  },
  {
    path: '/{filename*}',
    method: 'GET',
    handler: {
      directory: {
        path: path.join(__dirname, 'public'),
        index: ['main.html'],
      },
    },
  },
  {
    path: '/{any*}',
    method: '*',
    handler: getLostHandler,
  },
];

module.exports = routes;
