import React, { Component } from 'react';

import { Header } from '../../components';
import { Body } from '../../components';


import '../../App.css';
import "../../assets/css/grid.css";

export default class Template extends Component {
    render() {
        
        console.log('template', this.props)
        
       return( 
            <div className="App">
            
                <Header>
                </Header>

                <Body children= { this.props.location.search }>    
                </Body>
            
            </div>
      );
      
    }
}

