import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import RsearchPlanContent from './Rsearch_Plan_Content';



class Plan_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <div className='rsearch-plan-intro'>
                    <p className='rsearch-plan-intro-title'><span className='p-en bold-text'>Onion RsearchAI <sup className='copy-right'>®</sup>  — Building</span> 循证咨询团队</p>
                    <p className='rsearch-plan-intro-subtitle'> 赋能 <span className='p-en'>Healthcare company employee</span> ，成为 <span className='p-en'>KOL</span> 研究的“咨询顾问”</p>
                </div>
                <RsearchPlanContent />
                <div className='rsearch-plan-end'>
                    <p className='rsearch-plan-intro-title'>“ <span className='p-en bold-text'>Onion RsearchAI <sup className='copy-right'>®</sup></span> ”</p>
                    <p className='rsearch-plan-intrp-sibtitle'>改变 临床研究 的方式</p>
                    <p className='rsearch-plan-intrp-sibtitle'> 改变与 <span className='p-en'>KOL</span> 的学术沟通的方式</p>
                </div>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Plan_Page);