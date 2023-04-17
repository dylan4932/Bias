import React from 'react';

import './index.css';


import {withRouter} from 'react-router' 


import Sidebar from '../Sidebar';
import ProfilePaper from './Profile_Paper';
import { getBiasItems } from '../../actions/bias';
import BiasList from '../BiasList';
import Footer from '../footer';

class Profile extends React.Component {
    constructor(props) {
        super(props) 
        getBiasItems(this)
    }
    state={
        biases:[]
    }
    
    render(){
        const { app, usr } = this.props;
        return (
            <div className='bias-main-homepage'>
                <div className='bias-header'>
                    <BiasList app={app} usr={usr}/>   
                </div>
                <div class='bias-main-content-container'> 
                    <ProfilePaper usr={usr}/>
                    <Sidebar biases={this.state.biases}/>
                </div> 

                <Footer/>
            </div>
            
        )
    }
}

export default withRouter( Profile );