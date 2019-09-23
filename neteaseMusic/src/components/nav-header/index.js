import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import classNames from 'classnames'
import './nav-header.scss'

const Nav= props=>{
  return (
    <nav
      className={classNames(
        {'layer-low':props.isSideBar}
      )}
    >
      <div
        className="goback"
        onClick={props.history.goBack}
      ></div>
      <div className="title">
        {props.title}
      </div>
    </nav>
  )
}


const state2props = state =>({
  isSideBar:state.isSideBar
})

export default withRouter(
  connect(
    state2props
  )(Nav)
)