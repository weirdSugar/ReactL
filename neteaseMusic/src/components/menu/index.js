import React from 'react'
import MenuItem from './menu-item'
import classNames from 'classnames'

import './menu.scss'
const Menu =(props)=>{
  const menu_itemlist=['皮肤中心']

  return (
    <div
     className={classNames(
       'menu',
       {'menu-open':props.isOpen}
      )
    }
     onClick={props.closeMenu.bind(this,false)}
    >
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