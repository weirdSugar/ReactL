import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../../components/header'

class App extends React.Component{
  render(){
    return (
        <React.Fragment>
        <Header />
          <React.Fragment>
            {Array(120).fill(null).map((itm,idx)=>(
              <div>
                {idx}
              </div>
            ))}
          </React.Fragment>
        </React.Fragment>
    )
  }
}
export default App