import React, { Component } from 'react';
import SideBar from './SideBar.js'
import NavBar from './NavBar.js'


class MainContainer extends Component {
    render() {
        return (
          <div> 
              <NavBar title="WEB422 - Project Portal" /> 
              <div className="container-fluid"> 
                  <div className="row"> 
                      
                      <SideBar highlight={this.props.sidebar} /> 
                      <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> 
                        
                        {this.props.children}
                      </div> 
                  </div> 
              </div> 
          </div>
        );
    }
}

export default MainContainer;