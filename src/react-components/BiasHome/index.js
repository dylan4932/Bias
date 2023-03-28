import React from 'react';

import './index.css';
import {withRouter} from 'react-router' 
import { getBiasItems } from '../../actions/bias';

// import Navigator from '../Navigator';
// import Gallery from './Gallery';
// import Sidebar from '../Sidebar';
// import Advertisment from '../Advertisment';

import BiasList from '../BiasList';
import BiasIntro from './BiasSlogan';
import Footer from '../footer';
import BiasHomeContent from './BiasHomeContent';



class Home extends React.Component {
    constructor(props) {
        super(props)
        getBiasItems(this)
    }
    state = {
        biases: []
    }
    render(){
        const { app, usr } = this.props;
        return (
            <div className='bias-main-homepage'>
                <div className='bias-header'>
                    <BiasList app={app} usr={usr}/>  
                </div>
                     
                <div className='bias-home-content-container'> 
                    {/* <Gallery />
                    <Sidebar biases={this.state.biases}/> */}
                    <BiasIntro />
                    <BiasHomeContent/>
                </div>   
                <Footer/>   
            </div>
            
        )
    }
}

export default withRouter(Home);