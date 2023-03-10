import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import plan_img from '../../content-img/plan-img.png'


class Plan_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <div className='plan-block1'>
                    <p>提高临床研究水平</p>
                    <p>可选择一个服务计划来辅助您的研究；—— 规范、高质量、具有创新。</p>
                </div>
                <div className='plan-container'>
                    <img src={plan_img} alt='main-plan-img'></img>
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Plan_Page);