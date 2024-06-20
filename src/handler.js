const getRootHandler = (request, h) => h.redirect('main.html');

const getLostHandler = (request, h) => {
  const response = h.response({
    status: 'fail',
    message: 'Welcome to the Service, but you seem to be Lost!',
  });

  response.code(404);

  return response;
};

module.exports = {
  getRootHandler, getLostHandler,
};
