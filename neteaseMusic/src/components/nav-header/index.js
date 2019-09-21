import React from 'react'
import {withRouter} from 'react-router'
import './nav-header.scss'
const Nav= props=>{
  return (
    <nav>
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
export default withRouter(Nav)