import React from 'react'
import MenuItem from './menu-item'
import './menu.scss'
const Menu =(props)=>{
  const menu_itemlist=['皮肤中心']
  return (
    <div className="menu">
      <div className="menu-mask"></div>
      <div className="menu-content">
        <div className="menu-title"></div>
        {
          menu_itemlist.map((itm,idx)=>(
            <MenuItem key={idx} name={itm} />
          ))
        }
      </div>
    </div>
  )
}

export default Menu