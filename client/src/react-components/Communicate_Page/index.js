import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import Portal_list from '../Portal_list';
import Footer from '../footer';
import CommunicateIntro from './Communicate_intro';
import communicate_img1 from '../../content-img/communicate-img1.png'
import communicate_img2 from '../../content-img/communicate-img2.png'
import communicate_img3 from '../../content-img/communicate-img3.png'


class Communicate_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <Portal_list/>
                <CommunicateIntro/>
                <div className='grid-container '>
                    <div className='grid-content'>
                        <p className='communicate-text'>With Onion！成为“Solution 专家”，提高客户满意度</p>
                  
                        <ul className='communicate-list'>
                            <li>整理 KOL 的研究思路；</li>
                            <li>激发 KOL 研究的灵感、确定研究题目；</li>
                            <li>确定研究技术路线（Path）、形成研究关键框架（Framework）；</li>
                            <li>数据服务、统计分析服务；</li>
                            <li>导引研究方案（Protocol）& 报告（report）的撰写</li>
                        </ul>
                    </div>
                    <div id='communicate-img1' className='communicate-img'>
                        <img src={communicate_img1} alt='communciate_img1'/>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='communicate-img'>
                        <img src={communicate_img2} alt='communicate_img2'/>
                    </div>
                    <div className='grid-content'>
                        <p className='communicate-text'>Onion 驱动的科研项目，极大提升KOL 覆盖效能，同时降低覆盖成本 </p>
                        <ul className='communicate-list'>
                            <li>With Onion， 可以同时服务多个研究者；大幅提高与 KOL 互动的时间、频率 ；</li>
                            <li>Onion— a AI 辅助研究系统，对您而言是另一个 AI 研究设计专家帮您与KOL互动，为您节省大量时间和精力；</li>
                            <li>KOL 将更加依赖您</li>
                    
                        </ul>
                    </div>
                </div>
                <div className='grid-container '>
                    <div className='communicate-img'>
                        <p className='communicate-text'>With Onion！成为“Solution 专家”，提高客户满意度</p>
                  
                        <ul className='back-space'>
                            <li>AI 辅助决策适合的研究类型、研究设计；</li>
                            <li>AI 决策研究的关键框架：如何假设、研究设计、是否“巢氏”、“如何随机”、“样本量估计方法”、“统计学分析方法”、“变量处理”、“偏倚控制策略”、“敏感性分析”、“亚组分析”……</li>
                            <li>多功能的 EDC 辅助完成“预研究、预分析”</li>
                        </ul>
                    </div>
                    <div className='communicate-img'>
                        <img src={communicate_img3} alt='communicate_img3'/>
                    </div>
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Communicate_Page);