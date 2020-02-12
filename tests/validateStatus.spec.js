/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import deepFreezer from 'deep-freezer';
import { validateStatus } from '../src/Utils';

describe('validateStatus', () => {
  it('Should validateStatus exist', () => {
    expect(validateStatus).to.exist;
  });
  it('Should return "/Login" if state to equal 200', () => {
    after = deepFreezer({
      action: true,
      endPoint: ''
    });
    expect(validateStatus(200)).to.deep.equal(after);
  });
  it('Should return "/Login" if state to equal 401', () => {
    after = deepFreezer({
      action: false,
      endPoint: '/Login'
    });
    expect(validateStatus(401)).to.deep.equal(after);
  });
});
