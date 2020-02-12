'use strict'
import { UPDATE_DATA } from '../actions/actionTypes';

export const initialState = [];
const initialAction = {
  type: UPDATE_DATA,
  payload: []
};

const searchReducer = (state = initialState, action = initialAction) => {
  const data = [];

  if (action.type === UPDATE_DATA && action !== undefined) {
    if (!action.payload || !action.type) {
      return state;
    } else if (action.payload.length === 0) {
      return state;
    } else if (state === action.payload) {
      return state;
    }

    action.payload.forEach((album) => {
      data.push({
        name_album: album.name,
        name_artist: album.artists[0].name,
        image_url: album.images[0].url,
        id: album.id
      })
    })

    return data;
  }

  return state;
};

export default searchReducer;
