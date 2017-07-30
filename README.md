# pambda-404

Render 404 page.

## Installation

```
npm i pambda-404 -S
```

## Usage

``` javascript
import { compose, createLambda } from 'pambda';
import { render404 } from 'pambda-404';

export const handler = createLambda(
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
