import {
  combineReducers
} from "redux"
import ActionType from '../actionType'


const initialState = {
  isSideBar: false
}

function toggleSidebar(initIsSideBar = initialState.isSideBar, action) {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return action.isSideBar
    default:
      return initIsSideBar
  }
}

const reducer = combineReducers({
  isSideBar:toggleSidebar
})

export default reducer