import React from 'react'
import {connect} from 'react-redux'
import {actionToggleSidebar} from '../../store/actions'
import './header.scss'

const Header = props =>{
  return(
    <header className="header">
      <div
        className="menu-drawer"
        onClick={props.openSidebar}
      ></div>
      <div className="brand"></div>
      <div className="search"></div>
    </header>
  )
}

// const state2props = state =>({

// })

const dispatch2props = dispatch=>({
  openSidebar:()=>{
    dispatch(actionToggleSidebar(true))
  }
})

export default connect(
  state => state,
  dispatch2props
)(Header)