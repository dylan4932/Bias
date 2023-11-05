import React from 'react';

import './index.css'

import {withRouter} from 'react-router' 
import PortalList from '../Portal_list';
import Slogan from './Slogan';
import PortalSlogen from './PortalSlogan';
import Footer from '../footer';
import OnionIntro from './Onion_intro';
import IntroContent from './Intro_content'

class Portal_page extends React.Component {
    
    render(){
        // const flag = 'home';
        return (
            <div className='introduction'>
                <PortalList/>
                <Slogan />
                <OnionIntro />
                <IntroContent />
                <PortalSlogen/>
                <Footer />    
            </div>
            
        )
    }
}

export default withRouter(Portal_page);