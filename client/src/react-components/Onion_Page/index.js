import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import OnionIntro from './Onion_intro';
import Footer from '../footer';
import paper_img1 from '../../content-img/paper-img1.png'
import paper_img2 from '../../content-img/paper-img2.png'
import paper_img3 from '../../content-img/paper-img3.png'

class Onion_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <OnionIntro className="intro-content" />
                <div className='intro-paper'>
                    <div className='paper-title'>
                        <h1>Onion 为什么懂得什么是“好的”临床研究?</h1>
                        <p>Onion 为什么懂得什么是“好的”临床研究?</p>
                    </div>
                    <div className='paper-container'>
                        <div className='paper-content'>
                            <div className='paper-left'>
                                <p>Onion 的AI技术将临床研究视为一系列针对研究设计的“决策”过程。Onion 通过界面 “容易理解的研究问题”与用户交互，通过巨大的专业知识图谱 & 多重的AI决策算法，为用户提供高质量的研究方案。</p>
                                <p>Onion 在几位流行病学、临床统计学、研究设计学专家的帮助下实现了这一点，并将巨大的知识图谱、优秀文献加载到系统中，以训练从深度神经网络(一些最复杂的人工智能技术)到简单的规则程序。”</p>
                            </div>
                            <div className='paper-right'>
                                <p>Dr. Li Dan，Onion 联合创立人</p>
                            </div>
                        </div>
                        <div className='paper-content' id="first-line">
                            <div className='left-img'>
                                <img src={paper_img1} alt="paper-img1"></img>
                            </div>
                            <div className='right-content'>
                                <h2>从先验知识中学习研究设计</h2>
                                <p>Onion 的 IT工程师们从大量的相关知识中建立了巨大的“知识图谱”，通过大量的文献有监督学习进行验证，学习优秀研究的显性规则&潜在模式。</p>
                            </div>
                        </div>
                        <div className='paper-content'>
                            <div className='left-img'>
                                <img src={paper_img2} alt="paper-img2"></img>
                            </div>
                            <div className='right-content'>
                                <h2>现状是“不够的”</h2>
                                <p>每年，大量的 RCT 在中国开展，证据等级高、试验内部一致性强是 RCT 的优势；但耗时长、费用大、试验设计距离临床实践环境相去较远成为RCT试验结果外推性的局限、这些又都是RCT的弱势。近年来“真实世界证据”因为距离临床实践更加贴近而被重视。仅仅有 RCT 是“不够的”。</p>
                                <p>好的研究设计专家 & 统计学专家 是“稀缺的”，对应医生整体的科研需求，能够胜任研究任务的先进 AI 技术辅助决策系统成为解决问题的可能，仅仅依靠“稀缺”的专家是“不够的”。临床医生日常工作繁忙，很难做到研究方法学的系统掌握，仅仅依靠自身的能力进行研究是“不够的”。</p>
                            </div>
                        </div>
                        <div className='paper-content'>
                            <div className='left-content'>
                                <h2>Onion 辅助决策关键问题</h2>
                                <p>从产生研究的 Idea → 激发研究的灵感 → 形成研究的题目；</p>
                                <p>确定研究类型 → 研究设计 ；</p>
                                <p>决策适合的样本量估计方法；</p>
                                <p>决策适合的统计学分析方法 ；</p>
                                <p>可能产生的 “bias”（偏倚）→ 偏倚控制策略；</p>
                                <p>撰写研究方案 & 报告</p>
                                <p>可以进行预研究的 EDC（可直接进行统计学分析、偏倚控制的数据库）</p>
                            </div>
                            <div className='right-img'>
                                <img src={paper_img3} alt="paper-img3"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Onion_Page);