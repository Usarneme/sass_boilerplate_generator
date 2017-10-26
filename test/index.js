var expect = require('chai').expect;

// Sanity check
describe('Mocha', function() {
  it('should run out tests using Mocha', function() {
    expect(true).to.be.ok;
  });
});

describe('Running sass style.scss:style.css should result in style.css being created correctly', function() {

  it('should run without error', function() {
    // sass style.scss:style.css should return 0 no error
  }),

  it('should create style.css', function() {
    // test for style.css existing
  }),

  it('tail of style.css should end with a commented source map file', function() {
    // like this: /*# sourceMappingURL=style.css.map */
    // ~$ tail style.css | grep '/*# sourceMappingURL=style.css.map */' SHOULD EXIST
  })
  
});