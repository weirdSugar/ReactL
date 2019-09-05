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
    const body=document.getElementsByTagName('body')[0]
    state?body.className='hidden':body.className=''
  }

  render(){
    return (
        <React.Fragment>
          <Header openMenu={this.toggleSideBar}/>
          <React.Fragment>
            {Array(120).fill(null).map((itm,idx)=>(
              <div className='zzz' key={idx}>
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