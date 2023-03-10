import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import CommunicateIntro from './Communicate_intro';
import communicate_col1 from '../../onion_icons/communicate-col1.png'
import communicate_col2 from '../../onion_icons/communicate-col2.png'
import communicate_col3 from '../../onion_icons/communicate-col3.png'
import communicate_col4 from '../../onion_icons/communicate-col4.png'
import communicate_img1 from '../../content-img/communicate-img1.png'
import communicate_img2 from '../../content-img/communicate-img2.png'
import communicate_img3 from '../../content-img/communicate-img3.png'


class Communicate_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <CommunicateIntro/>
                <div className='communicate-subtitle'>
                    <div className='subtitle-col'>
                        <img src={communicate_col1} alt='research-colomn-icon1'></img>
                        <p>如何找到对 KOL 有价值的话题？如何获得与 KOL 沟通中的学术优势，并与KOL 进行同一高度的互动？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check' src={communicate_col2} alt='research-colomn-icon2'></img>
                        <p>如何成为临床研究的咨询专家？如何建立 KOL对您个人、品牌 & 组织的认可度？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={communicate_col3} alt='research-colomn-icon3'></img>
                        <p>怎样进行研究类的项目？如何提高KOL 的覆盖？如何优化 KOL的诊疗观念，使您的产品以正确的时机、正确的用法使用于正确的患者？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={communicate_col4} alt='research-colomn-icon4'></img>
                        <p>真实世界证据，有机会引导新产品快速准入，支撑未来政策谈判。如何获得真实世界证据？</p>
                    </div>
                </div>
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