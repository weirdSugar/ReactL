import React from 'react'
import MenuItem from './menu-item'
import classNames from 'classnames'

import './menu.scss'
const Menu =(props)=>{
  const menu_itemlist=[
    '皮肤中心',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '77',
    '8',
    '9',
    '13',
    '14',
    '15',
    '23',
    '1111',
    '2354',
    '53',
    '5222',
    '84',
    '21,',
    '23'
  ]


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
        <div className="menu-item-wrapper">
          {
            menu_itemlist.map((itm,idx)=>(
              <MenuItem key={idx} name={itm} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Menu