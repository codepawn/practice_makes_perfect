var up = require('./'),
  expect = require('chai').expect;

describe('my file', function() {
  it('upper', function() {
    expect(up('hello')).to.equal('HELLO');
  });
});
