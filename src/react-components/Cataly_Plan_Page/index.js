import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import CatalyContent from './Cataly_Content';


class Cataly_Plan_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <div className='header-space'></div>
                <CatalyContent />
                <div className='cataly-plan-intro'>
                    <p className='cataly-plan-intro-title'><span className='p-en bold-text'>Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly — </span>医院管理循证研究浸入式体验</p>
                    <p className='cataly-plan-intro-subtitle'> <span className='p-en bold-text'>Hospital administrator‘s idea + Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly = a research protocol</span></p>
                </div>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Cataly_Plan_Page);