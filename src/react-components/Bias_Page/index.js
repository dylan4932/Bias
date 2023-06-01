import React from 'react';

import './index.css';
import Content from './Main_Content';

import {withRouter} from 'react-router' 

import BiasList from '../BiasList';
import Sidebar from '../Sidebar';
import Footer from '../footer';
import { getBiasItems } from '../../actions/bias';

class BiasPage extends React.Component {
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
                <div className='bias-main-content-container'> 

                    <Content biases={this.state.biases}/>
                    <Sidebar biases={this.state.biases}/>
                    
                </div> 
                <Footer/>
            </div>
            
        )
    }
}

export default withRouter(BiasPage);