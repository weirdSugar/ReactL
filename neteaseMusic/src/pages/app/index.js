import React from 'react'
import Header from '../../components/header'
import Menu from '../../components/menu'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isSideBar:false
    }
    this.toggleSideBar=this.toggleSideBar.bind(this)
  }
  
  toggleSideBar(state){
    this.setState({
      isSideBar:state
    })
  }

  render(){
    return (
        <React.Fragment>
          <Header openMenu={this.toggleSideBar}/>
          <React.Fragment>
            {Array(120).fill(null).map((itm,idx)=>(
              <div key={idx}>
                {idx}
              </div>
            ))}
          </React.Fragment>
          <Menu
           closeMenu={this.toggleSideBar}
           isOpen={this.state.isSideBar}
          />
        </React.Fragment>
    )
  }
}
export default App