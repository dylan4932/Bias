import React from 'react';
import { withRouter } from 'react-router';
import './index.css';
import LoginContainer from './LoginContainer';


import BiasList from '../BiasList';
import Footer from '../footer';

class BiasLogin extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { app } = this.props;
        return (
            <div className='bias-main-homepage'>
                <div className='bias-header'>
                    <BiasList/>  
                </div>
                     
                <div className='bias-home-content-container'> 
                    <LoginContainer app={app}/>
                </div>   
                <Footer/>   
            </div>
            
        )
    }
}

export default withRouter(BiasLogin);

