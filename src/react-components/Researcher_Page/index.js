import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';

import research_col1 from '../../onion_icons/research-col1.png'
import research_col2 from '../../onion_icons/research-col2.png'
import research_col3 from '../../onion_icons/research-col3.png'
import research_col4 from '../../onion_icons/research-col4.png'
import research_ctn_col2 from '../../onion_icons/research-ctn-col2.png'
import research_ctn_col3 from '../../onion_icons/research-ctn-col3.png'
import research_ctn_col4 from '../../onion_icons/research-ctn-col4.png'

import research_img1 from '../../content-img/research-img1.png'
import research_img2 from '../../content-img/research-img2.png'
import research_img3 from '../../content-img/research-img3.png'
import ResearchContent from './Research_content';
import ResearchIntro from './Research_Intro';
import OnionIntro from './Onion_Intro';
import ArtdatingIntro from './Artdating_Intro';


class Researcher_page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <OnionIntro/>
                <ResearchIntro/>
                <div className='research-subtitle'>
                    <div className='subtitle-col'>
                        <img id='check-small' src={research_col1} alt='research-colomn-icon1'></img>
                        <p className='portal-text'>临床专家应该将研究主题聚焦于“临床实践”，怎样才能在临床实践中挖掘好的“研究方向”呢？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check-small' src={research_col2} alt='research-colomn-icon2'></img>
                        <p className='portal-text'>“文献检索、文献积累”对研究课题的确立大有脾益，但如何积累文献才能有助于研究课题的成立呢？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check-small' src={research_col3} alt='research-colomn-icon3'></img>
                        <p className='portal-text'>总听到其他专家用一组病例队列可以做多个研究，发表多篇文献，怎样才能具有这样的研究灵感呢？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check-small' src={research_col4} alt='research-colomn-icon4'></img>
                        <p className='portal-text'>如何表达有价值的、规范的研究题目，让研究的价值和本质一目了然呢？</p>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='research-img'>
                        <img src={research_img1} alt='research_img1'/>
                    </div>
                    <div className='grid-content'>
                        <p className='back-space research-text'><span className='bold-text p-en'>With Onion</span> 激发研究者的研究灵感 </p>
                        <ul className='back-space wide-ul'>
                            <li><span className='bold-text p-en'>Onion AI</span> 分析研究者拟定研究领域的指南、共识、文献……，提出有价值的“研究课题”建议，并帮助研究者聚焦于具有临床实践意义的课题方向</li>
                            <li>研究的创新性除了干预（暴露）& 结局的创新之外，还有很多方面；<span className='bold-text p-en'>Onion</span> 通过提示来启发、延展研究者的研究创新；</li>
                        </ul>
                    </div>
                </div>
                <ResearchContent/>
                <div className='research-subtitle'>
                    <div className='subtitle-col'>
                        <img id='check-small' src={research_col1} alt='research-colomn-icon1'></img>
                        <p className='portal-text'>何为研究目的？不同研究目的下的研究课题，应该采用什么研究类型？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check' src={research_ctn_col2} alt='research-colomn-icon2'></img>
                        <p className='portal-text'>研究类型、研究设计、是否“巢氏”、样本量估计方法、统计学分析方法……</p>
                        <p className='portal-text'>如何决策？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check' src={research_ctn_col3} alt='research-ctn-icon3'></img>
                        <p className='portal-text'>如何建立一个好的“研究方案”？包括“研究方案” & “统计分析计划”</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check' src={research_ctn_col4} alt='research-ctn-icon4'></img>
                        <p className='portal-text'>撰写一份高质量的研究方案 或 报告，应该符合哪些规范、写到什么程度？</p>
                    </div>
                </div>

                <div className='grid-container'>
                    <div className='grid-content'>
                        <p className='research-text back-space'><span className='bold-text p-en'>With Onion</span> 提供研究的“关键决策” </p>
                        <ul>
                            <li><span className='bold-text p-en'>AI</span> 辅助决策适合的研究类型、研究设计；</li>
                            <li><span className='bold-text p-en'>AI</span> 决策研究中关键的问题，形成研究关键框架，包括：如何假设、研究设计、是否“巢氏”、“如何随机”、“样本量估计方法”、“统计学分析方法”、“变量处理”、“偏倚控制策略”、“敏感性分析”、“亚组分析”……</li>
                            <li>多功能的 <span className='bolder'>数据库</span> 辅助完成“预研究、预分析”</li>
                        </ul>
                    </div>
                    <div className='research-img'>
                        <img src={research_img2} alt='research_img2'/>
                    </div>
                </div>
                
                <div className='grid-container '>
                    <div  className='research-img'>
                        <img src={research_img3} alt='research_img3'/>
                    </div>
                    <div className='grid-content' id='move-down'>
                        <p className='research-text back-space'><span className='bold-text p-en'>With Onion</span> 导引研究</p>
                        <ul className='back-space'>
                            <li> 向导研究者确定有临床价值的研究方向；</li>
                            <li> 向导研究者进行文献积累；</li>
                            <li> 向导研究题目的规范书写；</li>
                            <li> 向导研究者研究方案 & 报告的规范书写</li>
                        </ul>
                    </div>
                </div>
                <ArtdatingIntro/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Researcher_page);