const docRand = require('./../doc-rand.js');
const assert = require('assert');

describe('random-document', function() {
  const testObj = {
    a: [1, 2, 3],
    b: [10, 20, 30],
    c: [100, 200, 300]
  };

  it('should return random elements defined in the test object', function() {
    const size = 5;
    const doc = docRand.fromObject(testObj, size);
    console.log(doc.documentList);
    assert.equal(doc.documentList.length, size);
    doc.documentList.forEach((element) => {
      assert(testObj.a.includes(element.a));
      assert(testObj.b.includes(element.b));
      assert(testObj.c.includes(element.c));
    });
  });

  it('should return random elements defined in the test file', function() {
    const size = 10;
    const doc = docRand.fromFile('./test/test-input.json', size);
    console.log(doc.documentList);
    assert.equal(doc.documentList.length, size);
    doc.documentList.forEach((element) => {
      assert(testObj.a.includes(element.a));
      assert(testObj.b.includes(element.b));
      assert(testObj.c.includes(element.c));
    });
  });
});
