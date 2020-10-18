import { combineReducers } from 'redux'

import { userPartsListReducer } from './userPartsList/userPartsListReducer'

export default combineReducers({
  userPartsList: userPartsListReducer
})