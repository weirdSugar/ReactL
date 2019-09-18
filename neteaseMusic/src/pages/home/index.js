import React from 'react'
import Header from '../../components/header'

const Home = props =>{
    return (
        <React.Fragment>
          <Header/>
          {Array(120).fill(null).map((itm,idx)=>(
            <div className='zzz' key={idx}>
              {idx}
            </div>
          ))}
        </React.Fragment>
    )
}
export default Home