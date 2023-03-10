import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';

import research_col1 from '../../onion_icons/research-col1.png'
import research_col2 from '../../onion_icons/research-col2.png'
import research_col3 from '../../onion_icons/research-col3.png'
import research_col4 from '../../onion_icons/research-col4.png'
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
                <div className='research-subtitle'>
                    <div className='subtitle-col'>
                        <img src={research_col1} alt='research-colomn-icon1'></img>
                        <p>临床专家应该将研究主题聚焦于“临床实践”，怎样才能在临床实践中挖掘好的“研究方向”呢？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col2} alt='research-colomn-icon2'></img>
                        <p>“文献检索、文献积累”对研究课题的确立大有脾益，但如何积累文献才能有助于研究课题的成立呢？。</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col3} alt='research-colomn-icon3'></img>
                        <p>总听到其他专家用一组病例队列可以做多个研究，发表多篇文献，怎样才能具有这样的研究灵感呢？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col4} alt='research-colomn-icon4'></img>
                        <p>如何表达有价值的、规范的研究题目，让人一目了解研究的价值和本质呢？</p>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='research-img'>
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
                    <div className='research-img'>
                        <img src={research_img2} alt='research_img2'/>
                    </div>
                </div>
                <ResearchContent/>
                <div className='research-subtitle'>
                    <div className='subtitle-col'>
                        <img src={research_col1} alt='research-colomn-icon1'></img>
                        <p>我的研究课题不同研究目的下应该采用什么适合的研究类型？何为研究目的？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col2} alt='research-colomn-icon2'></img>
                        <p>研究类型、研究设计、是否“巢氏”、样本量估计方法、统计学分析方法……</p>
                        <p>如何决策？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col3} alt='research-colomn-icon3'></img>
                        <p>如何建立一个好的“研究方案”？包括“研究方案” & “统计分析计划”</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col4} alt='research-colomn-icon4'></img>
                        <p>撰写一份高质量的研究方案 或 报告，应该符合哪些规范、写到什么程度？</p>
                    </div>
                </div>
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
                    <div  className='research-img-down'>
                        <img src={research_img3} alt='research_img3'/>
                    </div>
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Researcher_page);