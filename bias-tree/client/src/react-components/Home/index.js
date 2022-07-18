import React from 'react';

import './index.css';
import Navigator from '../Navigator';

import {withRouter} from 'react-router' 
import Gallery from '../Gallery';
import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';



class Home extends React.Component {
  
    render(){
        // const flag = 'home';
        return (
            <div className='homepage'>
                <Navigator />
                <div class='adv'>
                    <Advertisment/>
                </div>
                   
                <div class='main-content'> 
                    <Gallery />
                    <Sidebar />
                </div>      
            </div>
            
        )
    }
}

export default withRouter(Home);