import React from 'react'
import './menu-item.scss'
import {withRouter} from 'react-router' 
const MenuItem = props =>{
  const {name,path}=props
  const open=function(){
    path && props.history.push({
        pathname:path
    })
  }
  return (
    <div
     className='menu-item'
     onClick={open}
    >
      <span className="menu-item-name">
        {name}
      </span>
      <span className="go"></span>
    </div>
  )
}


export default withRouter(MenuItem)