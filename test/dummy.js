import { expect } from 'chai';
import routes from '../src/routes';

describe('dummy', () => {
  it('should fail', () => {
    console.log(expect)
    expect([]).to.have.length(2);
  });
  it('should pass', () => {
    expect(42).to.equal(42);
  });
});
