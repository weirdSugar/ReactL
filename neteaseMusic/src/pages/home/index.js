import React from 'react'
import Header from '../../components/header'
import './home.scss'
const Home = props =>{
    return (
        <div className='home'>
          <Header/>
          {Array(120).fill(null).map((itm,idx)=>(
            <div className='zzz' key={idx}>
              {idx}
            </div>
          ))}
        </div>
    )
}
export default Home