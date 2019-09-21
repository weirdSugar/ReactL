import ActionTypes from '../actionType'

export function actionToggleSidebar(isSideBar) {
  return {
    type: ActionTypes.TOGGLE_SIDEBAR,
    isSideBar: isSideBar,
  }
}