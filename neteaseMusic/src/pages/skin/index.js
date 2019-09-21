import React from 'react'
import Nav from '../../components/nav-header'
import './skin.scss'
const Skin = props => {
  const listOfSkins=[
    {
      name:'网易红',
      key:'neteaseRed',
      value:'#e5473c'
    },
    {
      name:'企鹅绿',
      key:'qqGreen',
      value:'#31c27c'
    },
    {
      name:'酷狗蓝',
      key:'kugouBlue',
      value: '#0c8ed9'
    },
    {
      name:'虾米橙',
      key:'xiamiOrange',
      value: '#f60'
    },
    {
      name: '暗夜黑',
      key: 'xuanKuSkin',
      value: '#222'
    },
    {
      name: '可爱粉',
      key: 'keAiSkin',
      value: '#ff87b4'
    },
    {
      name: '土豪金',
      key: 'tuHaoSkin',
      value: '#faac62'
    }
  ]

  return (
    <div className='skin'>
      <Nav title={'皮肤中心'}></Nav>
    </div>
  )
}

export default Skin