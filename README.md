# pambda-404

Render 404 page.

## Installation

```
npm i pambda-404
```

## Usage

``` javascript
const { compose, createLambda } = require('pambda');
const { render404 } = require('pambda-404');

exports.handler = createLambda(
  compose(
    render404()
  )
);
```

## render404(options)

- `options.statusCode`
    - A integer of the HTTP response status code.
    - Default: `404`
- `options.headers`
    - An object of the HTTP response headers.
    - Default: `{ 'Content-Type': 'text/plain' }`
- `options.body`
    - A string of the HTTP response body.
    - Default: `"Not found"`

## License

MIT
