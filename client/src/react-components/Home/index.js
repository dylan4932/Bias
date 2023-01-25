import React from 'react';

import './index.css';
import Navigator from '../Navigator';

import {withRouter} from 'react-router' 
import Gallery from '../Gallery';
import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';
import { getBiasItems } from '../../actions/bias';



class Home extends React.Component {
    constructor(props) {
        super(props)
        getBiasItems(this)
    }
    state = {
        biases: []
    }
    render(){
        // const flag = 'home';
        return (
            <div className='homepage'>
                <Navigator />
                <div className='adv'>
                    <Advertisment title='欢迎访问'/>
                </div>
                   
                <div className='main-content'> 
                    <Gallery />
                    <Sidebar biases={this.state.biases}/>
                </div>      
            </div>
            
        )
    }
}

export default withRouter(Home);