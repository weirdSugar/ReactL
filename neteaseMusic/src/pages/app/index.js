import React from 'react'
import Header from '../../components/header'
import Menu from '../../components/menu'
class App extends React.Component{
  render(){
    return (
        <React.Fragment>
          <Header />
          <React.Fragment>
            {Array(120).fill(null).map((itm,idx)=>(
              <div key={idx}>
                {idx}
              </div>
            ))}
          </React.Fragment>
          <Menu />
        </React.Fragment>
    )
  }
}
export default App