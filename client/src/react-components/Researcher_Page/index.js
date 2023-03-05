import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';

import research_img1 from '../../content-img/research-img1.png'
import research_img2 from '../../content-img/research-img2.png'
import research_img3 from '../../content-img/research-img3.png'
import ResearchContent from './Research_content';
import ResearchIntro from './Research_Intro';


class Researcher_page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <ResearchIntro/>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={research_img1} alt='research_img1'/>
                    </div>
                    <div className='grid-content'>
                        <p className='research-text'>Onion — AI 辅助系统 </p>
                        <p className='research-text tab-space'>With Onion 激发研究者的研究灵感</p>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-content'>
                        <p className='research-text'>Onion — AI 辅助系统</p>
                        <p className='research-text tab-space'>临床研究者的“Guide”（向导）</p>
                        <ul className='back-space'>
                            <li>向导研究者确定有临床价值的研究方向；</li>
                            <li>向导研究者进行文献积累；</li>
                            <li>向导研究题目的规范书写；</li>
                            <li>向导研究者研究方案 & 报告的规范书写</li>
                        </ul>
                    </div>
                    <div className='grid-img'>
                        <img src={research_img2} alt='research_img2'/>
                    </div>
                </div>
                <ResearchContent/>
                <div className='grid-container '>
                    <div className='grid-content'>
                        <p className='research-text'>Onion — AI 辅助系统</p>
                        <p className='research-text tab-space'>临床研究者的“Decision aid” (辅助决策)</p>
                  
                        <ul className='back-space'>
                            <li>AI 辅助决策适合的研究类型、研究设计；</li>
                            <li>AI 决策研究的关键框架：如何假设、研究设计、是否“巢氏”、“如何随机”、“样本量估计方法”、“统计学分析方法”、“变量处理”、“偏倚控制策略”、“敏感性分析”、“亚组分析”……</li>
                            <li>多功能的 EDC 辅助完成“预研究、预分析”</li>
                        </ul>
                    </div>
                    <div  className='research-img'>
                        <img src={research_img3} alt='research_img3'/>
                    </div>
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Researcher_page);