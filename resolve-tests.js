// Write your tests here!
// Here is an example.

var obj = {
  'part1' : {
    'name': 'Part 1',
    'size': 20,
    'qty' : 50
  },
  'part2' : {
    'name': 'Part 2',
    'size': 15,
    'qty' : 60
  },
  'part3' : [
    {
      'name': 'Part 3A',
      'size': 10,
      'qty' : 20
    }, {
      'name': 'Part 3B',
      'size': 5,
      'qty' : 20
    }, {
      'name': 'Part 3C',
      'size': 7.5,
      'qty' : 20
    }
  ],
  'part4': {}
};


Tinytest.add('resolve part1.name', function (test) {
  var expected = "Part 1",
      actual

  actual = Util.resolve(obj, 'part1.name')
  test.equal(actual, expected);
});
Tinytest.add('resolve part2.qty', function (test) {
  var expected = 60,
      actual

  actual = Util.resolve(obj, 'part2.qty')
  test.equal(actual, expected);
});
Tinytest.add('resolve part3[0].name', function (test) {
  var expected = "Part 3A",
      actual

  actual = Util.resolve(obj, 'part3[0].name')
  test.equal(actual, expected);
});
Tinytest.add('resolve part3[4].name => undefined', function (test) {
  var expected = undefined,
      actual

  actual = Util.resolve(obj, 'part3[4].name')
  test.equal(actual, expected);
});
Tinytest.add('resolve part5[0].name => undefined', function (test) {
  var expected = undefined,
      actual

  actual = Util.resolve(obj, 'part5[0].name')
  test.equal(actual, expected);
});

Tinytest.add('resolve set part2.name = Mary', function (test) {
  var expected = "Mary",
      actual

  actual = Util.resolve(obj, 'part2.name', "Mary")
  test.equal(actual, expected);

  actual = Util.resolve(obj, 'part2.name')
  test.equal(actual, expected);
});
Tinytest.add('resolve set part3[1].name = 3B', function (test) {
  var expected = "3B",
      actual

  actual = Util.resolve(obj, 'part3[1].name', "3B")
  test.equal(actual, expected);

  actual = Util.resolve(obj, 'part3[1].name')
  test.equal(actual, expected);
});
Tinytest.add('resolve set part4.name = Mary', function (test) {
  var expected = "Mary",
      actual

  actual = Util.resolve(obj, 'part4.name', "Mary")
  test.equal(actual, expected);

  actual = Util.resolve(obj, 'part4.name')
  test.equal(actual, expected);
});
Tinytest.add('resolve set part4.arr = [1, 2]', function (test) {
  var expected = [1, 2],
      actual

  actual = Util.resolve(obj, 'part4.arr', [1, 2])
  test.equal(actual, expected);

  actual = Util.resolve(obj, 'part4.arr')
  test.equal(actual, expected);
});
