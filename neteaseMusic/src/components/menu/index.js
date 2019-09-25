import React from 'react'
import MenuItem from './menu-item'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {actionToggleSidebar} from '../../store/actions'
import './menu.scss'
const menu_itemlist=[
  {
    name:'皮肤中心',
    path:'/skin'
  },
  {
    name:'1',
  },
  {
    name:'52',
  },
  {
    name:'3',
  },
  {
    name:'2',
  },
  {
    name:'8',
  },
  {
    name:'11',
  },
  {
    name:'4',
  },
  {
    name:'35',
  },
  {
    name:'73',
  },
  {
    name:'81',
  },
  {
    name:'134',
  },
  {
    name:'6',
  },
]
const Menu = props =>{
  
  return (
    <div
     className={classNames(
        'menu',
        {'menu-open':props.isSideBar},
        {'menu-close':!props.isSideBar}
      )}
      onClick={props.closeSideBar}
    >
      <div className={classNames(
          "menu-mask",
        )
      }
      ></div>
      <div className="menu-content">
      <div className="menu-title"></div>
      <div className="menu-item-wrapper">
        {
          menu_itemlist.map((itm,idx)=>(
            <MenuItem key={idx} name={itm.name} path={itm.path} />
          ))
        }
      </div>
      </div>
    </div>
  )
}


const state2props = state =>({
  isSideBar:state.isSideBar
})
const dispatch2props = dispatch =>({
  closeSideBar:()=>{
    dispatch(actionToggleSidebar(false))
  }
})
export default connect(
  state2props,
  dispatch2props,
)(Menu)