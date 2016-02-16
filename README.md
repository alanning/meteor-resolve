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
