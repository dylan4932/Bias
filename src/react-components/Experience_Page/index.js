import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import ExperienceContent from './Experience_Content';

class ExperiencePlan extends React.Component {
    render(){
        return (
            <div className='error-page'>
                <PortalList/>
                <div className='experience-plan-intro'>
                    <p className='experience-plan-intro-title'><span className='p-en bold-text'>Onion Experience Meeting — </span>临床研究浸入式体验</p>
                    <p className='experience-plan-intro-subtitle'> <span className='p-en bold-text'>Onion Experience Meeting = Clinician‘s idea + Onion RsearchAI</span><sup className='copy-right'> ®</sup></p>
                </div>
                <ExperienceContent />
                <div className='experience-plan-end'>
                    <p className='experience-plan-intro-title'><span className='p-en bold-text'>Onion Experience Meeting — </span>临床研究浸入式体验</p>
                    <p className='experience-plan-intro-subtitle'> <span className='p-en bold-text'>Onion Experience Meeting = Clinician‘s idea + Onion RsearchAI</span><sup className='copy-right'> ®</sup></p>
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(ExperiencePlan);