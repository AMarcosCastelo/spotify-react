/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import deepFreezer from 'deep-freezer';
import searchReducer, { initialState } from '../src/Reducers/searchReducer';
import { AppetiteForDestruction, UseYourIllusion } from './objModel';
import { UPDATE_DATA } from '../src/actions/actionTypes';

describe('Search Reducer', () => {
  context('Basic test', () => {
    it('should searchReducer to exist', () => {
      expect(searchReducer).to.exist;
    });

    it('should be a function', () => {
      expect(searchReducer).to.be.a('function');
    });
  });

  context('Initial implements', () => {
    it('should get data', () => {
      const before = deepFreezer([]);
      const action = deepFreezer({
        type: UPDATE_DATA,
        payload: [AppetiteForDestruction]
      });
      const after = [{
        name_album: 'Appetite For Destruction',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/9124aa5141344ef718b000b81e74e02fe06835f0',
        id: '3I9Z1nDCL4E0cP62flcbI5'
      }];
      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should get a new data', () => {
      const before = deepFreezer([{
        name_album: 'Appetite For Destruction',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/9124aa5141344ef718b000b81e74e02fe06835f0',
        id: '3I9Z1nDCL4E0cP62flcbI5'
      }]);
      const action = deepFreezer({
        type: UPDATE_DATA,
        payload: [UseYourIllusion]
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should get a new data with length > 1', () => {
      const before = deepFreezer([{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }]);
      const action = deepFreezer({
        type: UPDATE_DATA,
        payload: [UseYourIllusion, AppetiteForDestruction]
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      },
      {
        name_album: 'Appetite For Destruction',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/9124aa5141344ef718b000b81e74e02fe06835f0',
        id: '3I9Z1nDCL4E0cP62flcbI5'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should return the latest state if payload is []', () => {
      const before = deepFreezer([{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }]);
      const action = deepFreezer({
        type: UPDATE_DATA,
        payload: []
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should return the latest state if payload is undefined', () => {
      const before = deepFreezer([{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }]);
      const action = deepFreezer({
        type: UPDATE_DATA,
        payload: undefined
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should return the latest state if payload is null', () => {
      const before = deepFreezer([{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }]);
      const action = deepFreezer({
        type: UPDATE_DATA,
        payload: null
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should return the latest state if type is undefined', () => {
      const before = deepFreezer([{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }]);
      const action = deepFreezer({
        type: undefined,
        payload: []
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should return the latest state if type is null', () => {
      const before = deepFreezer([{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }]);
      const action = deepFreezer({
        type: null,
        payload: []
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should return the latest state if type is unknown', () => {
      const before = deepFreezer([{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }]);
      const action = deepFreezer({
        type: 'UNKNOWN',
        payload: []
      });
      const after = [{
        name_album: 'Use Your Illusion I',
        name_artist: "Guns N' Roses",
        image_url: 'https://i.scdn.co/image/25d16ea05bd64e90d793d23b792b3228f31924a4',
        id: '0CxPbTRARqKUYighiEY9Sz'
      }];

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });

    it('should return the latest state if state before is undefined', () => {
      const before = undefined;
      const action = deepFreezer({});
      const after = initialState;

      expect(searchReducer(before, action)).to.be.deep.equal(after);
    });
  });
});
