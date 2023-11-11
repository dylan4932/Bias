import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

// import Intro_img from '../../../content-img/intro-img.png'
import paper_img1 from '../../../content-img/paper-img1.png'
import paper_img2 from '../../../content-img/paper-img2.jpg'
import paper_img3 from '../../../content-img/paper-img3.png'
import founder_avator from '../../../onion_icons/founder_avator.png'

class IntroContent extends React.Component {
   
    
    render(){
        return ( 
            <div className='intro-paper'>
                <div className='paper-title'>
                    <p className='portal-subtitle'><span className='p-en'>Onion</span> 的 <span className='p-en'>AI</span> 决策</p>
                    <p className='paper-text'> <span className='p-en'>Onion</span> 所进行的辅助决策，是“临床研究学” 、“研究设计”& “临床统计学”的专业知识与 <span className='p-en'>AI</span> 创新技术的结合。</p>
                </div>
                <div className='paper-container'>
                    <div className='paper-content'>
                        <div className='paper-left'>
                            <p className='paper-text'><span className='bold-text p-en'>Onion RsearchAI<span id='copy-right'> ®</span></span> 的 <span className='bold-text p-en'>AI</span> 技术将”临床研究”视为一系列“决策”过程。<span className='bold-text p-en'>Onion</span> 通过界面上的问答 与用户交互，从而理解研究的具体情境；再运用巨大的知识图谱 & 多重的 <span className='bold-text p-en'>AI</span> 决策算法，为用户提供高质量的研究方案。</p>
                            <p className='paper-text'><span className='bold-text p-en'>Onion RsearchAI<span id='copy-right'> ®</span></span> 将巨大的研究指南、优秀文献、知识图谱……加载到系统中，用以训练复杂的神经网络决策算法(一些复杂的人工智能技术)和以逻辑规则为基础的决策程序。令人鼓舞的是，在国内外多位流行病学、临床统计学、研究设计专家、<span className='bold-text p-en'>IT</span> 专家的帮助下实现了这一点。</p>
                        </div>
                        <div className='paper-right'>
                            
                            <span className='p-en bold-text'>Dr. Li Dan</span>
                            <img src={founder_avator} alt='founder_avator' className='founder_avator'></img>
                            <p id='author-text' className='paper-text'><span className='bold-text p-en'>Onion RsearchAI<span id='copy-right'> ®</span></span> 联合创立人</p>
                        </div>
                    </div>
                    <div className='paper-content' id="first-line">
                        <div className='left-img'>
                            <img src={paper_img1} alt="paper-img1"></img>
                        </div>
                        <div className='right-content'>
                            <p className='portal-subtitle'>从先验知识中学习研究设计</p>
                            <p className='paper-text'><span className='bold-text p-en'>Onion RsearchAI<span id='copy-right'> ®</span></span> 的 <span className='bold-text p-en'>IT</span> 工程师们从大量的相关知识中建立了巨大的“知识图谱”，通过大量的文献进行有监督学习，并不断验证，学习优秀研究的显性规则 & 潜在模式，形成了临床研究的预测算法。</p>
                            <p className='paper-text'> 这些深度学习使 <span className='bold-text p-en'>Onion RsearchAI<span id='copy-right'> ®</span></span> 成为了临床研究的 <span className='bold-text p-en'>AI</span> 专家。</p>
                        </div>
                    </div>
                    <div className='paper-content'>
                        <div className='left-img'>
                            <img src={paper_img2} alt="paper-img2"></img>
                        </div>
                        <div className='right-content'>
                            <p className='portal-subtitle'><span className='p-en'>AI</span> 决策，提供研究方案 & 报告</p>
                            <p className='paper-text'><span className='bold-text p-en'>Onion RsearchAI<span id='copy-right'> ®</span></span>  根据交互的信息了解研究者的“研究情境”，<span className='p-en'>AI</span> 算法提供研究关键问题的决策，形成高质量的研究方案。</p>
                            
                        </div>
                    </div>
                    <div className='paper-content'>
                        <div className='left-content'>
                            <p className='portal-subtitle'>Onion 辅助决策关键问题</p>
                            <p className='paper-text'>从产生研究的 <span className='bold-text p-en'>Idea</span> → 激发研究的灵感 → 形成研究的题目；</p>
                            <p className='paper-text'>确定研究类型 → 研究设计 ；</p>
                            <p className='paper-text'>决策适合的样本量估计方法；</p>
                            <p className='paper-text'>决策适合的统计学分析方法 ；</p>
                            <p className='paper-text'>发现可能产生的 “<span className='bold-text p-en'>Bias</span>”（偏倚）→ 偏倚控制策略；</p>
                            <p className='paper-text'>撰写研究方案 & 报告；</p>
                            <p className='paper-text'>可以进行预研究的 <span className='bolder'>数据库</span>（可直接进行统计学分析、偏倚控制）</p>
                        </div>
                        <div className='right-img'>
                            <img src={paper_img3} alt="paper-img3"></img>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default withRouter(IntroContent);