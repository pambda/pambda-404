const test = require('tape');
const { render404 } = require('..');

test('test', t => {
  t.plan(2);

  const pambda = render404();

  const lambda = pambda((event, context, callback) => {
    t.fail();
  });

  lambda({}, {}, (err, result) => {
    t.error(err);

    t.equal(result.statusCode, 404);
  });
});
