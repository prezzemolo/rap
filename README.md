# @prezzemolo/rap
resolve all promises in object

## install
```bash
$ npm install @prezzemolo/rap
```

## example
in JavaScript
```js
const rap = require('@prezzemolo/rap').default
const { promisify } = require('util')
```

in TypeScript
```typescript
import rap from '@prezzemolo/rap'
import { promisify } from 'util'
```

then
```js
const setTimeoutAsync = async (...rest) => {
  await promisify(setTimeout)(...rest)
  return rest[0]
}

const parallel = async () => {
  console.time('parallel')
  const obj = await rap({
    t15s: setTimeoutAsync(15),
    t5s: setTimeoutAsync(5),
    ts: {
      t1s: setTimeoutAsync(1)
    }
  })
  console.timeEnd('parallel')
  return obj
}

const fall = async () => {
  console.time('fall')
  const t15s = await setTimeoutAsync(15)
  const t5s = await setTimeoutAsync(5)
  const t1s = await setTimeoutAsync(1)
  const obj = {
    t15s,
    t5s,
    ts: {
      t1s
    }
  }
  console.timeEnd('fall')
  return obj
}

Promise.all([fall(), parallel()]).then(console.dir)
```

and run
```bash
$ node example.js
parallel: 15.308ms
fall: 22.727ms
[ { t15s: 15, t5s: 5, ts: { t1s: 1 } },
  { t15s: 15, t5s: 5, ts: { t1s: 1 } } ]
```
