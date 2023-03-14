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
        return (
            <div className='bias-main-homepage'>
                <div className='bias-header'>
                    <BiasList/>  
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