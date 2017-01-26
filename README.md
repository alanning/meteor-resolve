# NOTE: This project is no longer maintained.

Please use [node-obj-resolve](https://github.com/alanning/node-obj-resolve) instead.  Further development will be on that npm package.  You can use the straight-node version in Meteor apps like this:

```
$ npm install --save obj-resolve
```

```js
import resolve from 'obj-resolve'

//...

resolve(obj, "foo.bar.baz")
```


## Description

Resolve a value given an object and a path representing how to traverse its object graph.

Can also set values on existing objects.

### Example

```
var obj = {
  foo: [
    {bar: "baz"}
  ]
};

Util.resolve(obj, "foo[0].bar");   // => "baz"
Util.resolve(obj, "hem[0].bar");   // => undefined
Util.resolve(obj, "name", "Mary");   // => "Mary"
```
