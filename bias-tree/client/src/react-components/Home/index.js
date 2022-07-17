import React from 'react';

import './index.css';
import Navigator from '../Navigator';

import {btn_activator} from '../../actions/bias'
import {withRouter} from 'react-router' 
import Gallery from '../Gallery';
import { BiPlanet, BiAlignLeft, BiCategory, BiSearch } from "react-icons/bi";
import Sidebar from '../Sidebar';


class Home extends React.Component {
  
    render(){
        // const flag = 'home';
        return (
            <div className='homepage'>
                <Navigator />
                <div class='main-content'> 
                    <Gallery />
                    <Sidebar />
                </div>      
            </div>
            
        )
    }
}

export default withRouter(Home);