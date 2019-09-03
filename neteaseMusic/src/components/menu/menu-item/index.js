import React from 'react'
import './menu-item.scss'
const MenuItem = props =>{
  return (
    <div className='menu-item'>
      <span className="menu-item-name">
        {props.name}
      </span>
      <span className="go"></span>
    </div>
  )
}

export default MenuItem