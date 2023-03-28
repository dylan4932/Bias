import React from 'react';

import './index.css';


import {withRouter} from 'react-router' 

import BiasList from '../BiasList';
import Sidebar from '../Sidebar';
import ContactPaper from './Contact_Paper';
import { getBiasItems } from '../../actions/bias';
import Footer from '../footer';


class Contact extends React.Component {
    constructor(props) {
        super(props); 
        getBiasItems(this);
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
                    <ContactPaper />
                    <Sidebar biases={this.state.biases}/>
                </div> 
                <Footer/>
                {/* <Pagination></Pagination> */}
            </div>
            
        )
    }
}

export default withRouter( Contact );