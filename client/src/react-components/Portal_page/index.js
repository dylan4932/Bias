import React from 'react';

import './index.css'

import {withRouter} from 'react-router' 
import { getBiasItems } from '../../actions/bias';
import PortalList from '../Portal_list';
import Slogan from './Slogan';
import Footer from '../footer';
import module1_phase1 from '../../content-img/module1-phase1.png'
import module1_phase2 from '../../content-img/module1-phase2.png'
import module2_interaction from '../../content-img/module2-interaction.png'
import module2_framework from '../../content-img/module2-framework.png'
import module3_note from '../../content-img/module3-note.png'


class Portal_page extends React.Component {
    constructor(props) {
        super(props)
        getBiasItems(this)
    }
    state = {
        biases: []
    }
    render(){
        // const flag = 'home';
        return (
            <div className='portal-page'>
                <PortalList/>
                <Slogan/>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={module1_phase1} alt='module1_phase1'/>
                    </div>
                    <div className='grid-content'>
                        <h5>向导研究者确定有临床价值的研究方向</h5>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-content'>
                        <h5>向导研究者进行文献积累</h5>
                    </div>
                    <div className='grid-img'>
                        <img src={module1_phase2} alt='module1_phase2'/>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={module2_interaction} alt='module2_interaction'/>
                    </div>
                    <div className='grid-content'>
                        <h5>界面交互，用户在交互存在不易理解时，可根据Onion 的提示，轻松完成交互……</h5>
                        <h5>Onion 理解研究者的研究的具体情境，根据情况辅助决策研究适合的“研究类型”</h5>
                        <h5>RCT？Cohort study？还是 Case-control study？……</h5>
                        <h5>辅助决策适合的研究类型、研究设计</h5>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-content'>
                        <h5>AI 决策研究的关键框架：如何假设、研究设计、是否“巢氏”、“如何随机”、样本量估计方法、统计学分析方法、变量处理、偏移控制策略、其他分析……</h5>
                    </div>
                    <div className='grid-img'>
                        <img src={module2_framework} alt='module2_framework'/>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={module3_note} alt='module3_note'/>
                    </div>
                    <div className='grid-content'>
                        <h5>向导研究者研究方案 & 报告的规范书写</h5>
                    </div>
                </div>
                <Footer/>    
            </div>
            
        )
    }
}

export default withRouter(Portal_page);