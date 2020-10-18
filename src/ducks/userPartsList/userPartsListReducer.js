import * as types from './types'

const initialState = {
  pending: false,
  exclusions: [],
  partsResults: []
}

export const userPartsListReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case types.PARTS_LIST_REQUESTED:
      return {
        ...state,
        pending: true
      }
    case types.PARTS_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
        partsResults: action.payload
      }
    case types.PARTS_EXCLUSIONS_REQUEST_SUCCESS:
      return {
        ...state,
        exclusions: action.payload
      }
    default:
      return state;
  }
}