/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import deepFreezer from 'deep-freezer';
import { verifyStatus } from '../src/Utils';

describe('verifyStatus', () => {
  it('Should verifyStatus exist', () => {
    expect(verifyStatus).to.exist;
  });
  it('Should return "/Login" if state to equal 200', () => {
    after = deepFreezer({
      action: true,
      endPoint: ''
    });
    expect(verifyStatus(200)).to.deep.equal(after);
  });
  it('Should return "/Login" if state to equal 401', () => {
    after = deepFreezer({
      action: false,
      endPoint: '/Login'
    });
    expect(verifyStatus(401)).to.deep.equal(after);
  });
  it('Should return {} default', () => {
    expect(verifyStatus()).to.deep.equal({});
  });
});
