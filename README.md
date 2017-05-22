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

## License

MIT
