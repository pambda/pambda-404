const render404 = (options = {}) => next => {
  const {
    statusCode = 404,
    headers = {
      'Content-Type': 'text/plain',
    },
    body = 'Not found',
  } = options;

  return (event, context, callback) => {
    callback(null, {
      statusCode,
      headers,
      body,
    });
  };
};

exports.render404 = render404;
