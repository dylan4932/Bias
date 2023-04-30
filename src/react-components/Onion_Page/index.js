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
                        <p className='portal-subtitle'><span className='p-en'>Onion</span> 为什么懂得什么是“好的”临床研究?</p>
                        <p className='paper-text'> 专业知识和创新技术的结合，是 <span className='p-en'>Onion</span> 辅助决策的基础。</p>
                    </div>
                    <div className='paper-container'>
                        <div className='paper-content'>
                            <div className='paper-left'>
                                <p className='paper-text'><span className='bold-text p-en'>Onion</span> 的<span className='bold-text p-en'>AI</span>技术将临床研究视为一系列针对研究设计的“决策”过程。<span className='bold-text p-en'>Onion</span> 通过界面上 “容易理解的研究问题” 与用户交互，再运用巨大的专业知识图谱 & 多重的<span className='bold-text p-en'>AI</span>决策算法，为用户提供高质量的研究方案。</p>
                                <p className='paper-text'><span className='bold-text p-en'>Onion</span> 在国内外多位流行病学、临床统计学、研究设计专家的帮助下实现了这一点，并将巨大的研究指南、优秀文献、知识图谱……加载到系统中，以训练从深度神经网络(一些复杂的人工智能技术)到简单的规则程序。</p>
                            </div>
                            <div className='paper-right'>
                                <p id='author-text' className='paper-text'><span className='p-en'>Dr. Li Dan，Onion</span> 联合创立人</p>
                            </div>
                        </div>
                        <div className='paper-content' id="first-line">
                            <div className='left-img'>
                                <img src={paper_img1} alt="paper-img1"></img>
                            </div>
                            <div className='right-content'>
                                <p className='portal-subtitle'>从先验知识中学习研究设计</p>
                                <p className='paper-text'><span className='bold-text p-en'>Onion</span> 的 <span className='bold-text p-en'>IT</span>工程师们从大量的相关知识中建立了巨大的“知识图谱”，通过大量的文献进行有监督学习，并不断验证，学习优秀研究的显性规则 & 潜在模式。</p>
                            </div>
                        </div>
                        <div className='paper-content'>
                            <div className='left-img'>
                                <img src={paper_img2} alt="paper-img2"></img>
                            </div>
                            <div className='right-content'>
                                <p className='portal-subtitle'>现状是“不足够的”</p>
                                <p className='paper-text'>每年，大量的 <span className='bold-text p-en'>RCT</span> 在中国开展，证据等级高、试验内部一致性强是 <span className='bold-text p-en'>RCT</span> 的优势；但耗时长、费用大、试验设计距离临床实践环境相去较远，成为<span className='bold-text p-en'>RCT</span>试验结果外推性的局限、这些又都是 <span className='bold-text p-en'>RCT</span>的弱势，仅仅只有 <span className='bold-text p-en'>RCT</span> 是“不足够的”。近年来“真实世界证据”因为距离临床实践更加贴近而被重视。</p>
                                <p className='paper-text'>临床医生日常工作繁忙，很难做到研究方法学的系统掌握，仅仅依靠自身的能力进行研究是“不足够的”。</p>
                                <p className='paper-text'>好的研究设计专家 & 统计学专家是极其“稀缺的”，仅仅依靠“稀缺”的专家是“不足够的”！</p>
                                <p className='paper-text'>用这些能够胜任研究任务的 <span className='bold-text p-en'>AI</span> 辅助决策系统来解决问题，成为未来的选择。</p>
                            </div>
                        </div>
                        <div className='paper-content'>
                            <div className='left-content'>
                                <p className='portal-subtitle'>Onion 辅助决策关键问题</p>
                                <p className='paper-text'>从产生研究的 <span className='bold-text p-en'>Idea</span> → 激发研究的灵感 → 形成研究的题目；</p>
                                <p className='paper-text'>确定研究类型 → 研究设计 ；</p>
                                <p className='paper-text'>决策适合的样本量估计方法；</p>
                                <p className='paper-text'>决策适合的统计学分析方法 ；</p>
                                <p className='paper-text'>发现可能产生的 “<span className='bold-text p-en'>bias</span>”（偏倚）→ 偏倚控制策略；</p>
                                <p className='paper-text'>撰写研究方案 & 报告</p>
                                <p className='paper-text'>可以进行预研究的 <span className='bold-text p-en'>EDC</span>（可直接进行统计学分析、偏倚控制的数据库）</p>
                            </div>
                            <div className='right-img'>
                                <img src={paper_img3} alt="paper-img3"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Onion_Page);