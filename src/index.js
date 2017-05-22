export const render404 = (options = {}) => next => {
  let {
    statusCode = 404,
    headers = {
      'Content-Type': 'text/plain',
    },
    body = 'Not found',
  } = options;
  let err = null;

  return (event, context, callback) => {
    callback(err, {
      statusCode,
      headers,
      body,
    });
  };
};
