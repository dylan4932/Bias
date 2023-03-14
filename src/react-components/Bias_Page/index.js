import React from 'react';

import './index.css';
import Content from './Main_Content';

import {withRouter} from 'react-router' 

import BiasList from '../BiasList';
import Sidebar from '../Sidebar';
import Footer from '../footer';


class BiasPage extends React.Component {
    
    render(){
        return (
            <div className='bias-main-homepage'>
                <div className='bias-header'>
                    <BiasList/>  
                </div>
                <div className='bias-main-content-container'> 

                    <Content />
                    <Sidebar />
                    
                </div> 
                <Footer/>
            </div>
            
        )
    }
}

export default withRouter(BiasPage);