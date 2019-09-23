import React from 'react'
import {connect} from 'react-redux'
import {actionToggleSidebar} from '../../store/actions'
import './header.scss'
import classNames from 'classnames'

const Header = props =>{
  return(
    <header className={classNames(
      'header',
      {'layer-low':props.isSideBar}
    )}>
      <div
        className="menu-drawer"
        onClick={props.openSidebar}
      ></div>
      <div className="brand"></div>
      <div className="search"></div>
    </header>
  )
}

const state2props = state =>({
  isSideBar:state.isSideBar
})

const dispatch2props = dispatch=>({
  openSidebar:()=>{
    dispatch(actionToggleSidebar(true))
  }
})

export default connect(
  state2props,
  dispatch2props
)(Header)