import { combineReducers } from "redux"
import * as ActionType from '../actionType'
const initialState={
  isSideBar: false
}

function toggleSidebar (isSideBar=initialState.isSideBar,action){
  switch(action.type){
    case ActionType.TOGGLE_SIDEBAR:
      return !isSideBar
    default:
      return isSideBar
  }
}

const reducer=combineReducers({
  toggleSidebar
})

export default reducer