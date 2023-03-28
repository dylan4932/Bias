import React from 'react';

import './index.css';


import {withRouter} from 'react-router' 


import Sidebar from '../Sidebar';
import AboutPaper from './About_Paper';
import { getBiasItems } from '../../actions/bias';
import BiasList from '../BiasList';
import Footer from '../footer';

class About extends React.Component {
    constructor(props) {
        super(props) 
        getBiasItems(this)
    }
    state={
        biases: []
    }
    
    render(){
        const { app, usr } = this.props;
        return (
            <div className='bias-main-homepage'>
                <div className='bias-header'>
                    <BiasList app={app} usr={usr}/>   
                </div>
                <div class='bias-main-content-container'> 
                    <AboutPaper />
                    <Sidebar biases={this.state.biases}/>
                </div> 
                {/* <Pagination></Pagination> */}
                <Footer/>
            </div>
            
        )
    }
}

export default withRouter( About );