import React from 'react'

const Nav= props=>{
  return (
    <nav>
      <div className="goback"></div>
      <div className="title">
        {props.title}
      </div>
    </nav>
  )
}
export default Nav