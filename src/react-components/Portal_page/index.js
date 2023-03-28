import React from 'react';

import './index.css'

import {withRouter} from 'react-router' 
import PortalList from '../Portal_list';
import Slogan from './Slogan';
import PortalSlogen from './PortalSlogan';
import Footer from '../footer';
import module1_phase1 from '../../content-img/module1-phase1.png'
import module1_phase2 from '../../content-img/module1-phase2.png'
import module2_interaction from '../../content-img/module2-interaction.png'
import module2_remind from '../../content-img/module2-remind.png'
import module2_framework from '../../content-img/module2-framework.png'
import module3_note from '../../content-img/module3-note.png'


class Portal_page extends React.Component {
    
    render(){
        // const flag = 'home';
        return (
            <div className='introduction'>
                <PortalList/>
                <Slogan/>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={module1_phase1} alt='module1-phase1'/>
                    </div>
                    <div className='grid-content'>
                        <p className='portal-subtitle'>界面交互，告诉 <span className='p-en'>Onion</span> 研究梗概</p>
                        <p className='portal-text'><span className='bold-text p-en'>Onion AI</span> 分析研究者拟定研究领域的指南、共识、文献，提出有价值的研究课题建议，延展研究者的研究创新；并帮助研究者聚焦于具有临床实践意义的课题方向</p>
                        <br/>
                        <p className='portal-subtitle double-space'><span className='p-en'>Onion</span> 激发灵感</p>
                        <p className='portal-text double-space'><span className='bold-text p-en' >Onion</span> 从多个维度提出突破“先验研究”的建议，使研究者的研究成为“迈出前沿的一小步、推进前沿的一大步”</p>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-content'>
                        <p className='portal-subtitle'>文献积累，<span className='p-en'>Onion</span> 辅助研究者</p>
                        <p className='portal-text'>检索的文献如果不能进行有效的分析则很难为研究提供帮助。文献积累应该怎样做？<span className='bold-text p-en' >Onion</span> 向导研究者有导向性的积累文献，并作出分析图表；先验研究的重要信息，一目了然！</p>
                    </div>
                    <div className='grid-img'>
                        <img src={module1_phase2} alt='module1_phase2'/>
                    </div>
                </div>

                <div className='grid-container'>    
                    <div className='grid-content'>
                        <p className='portal-subtitle'>书写研究题目，<span className='p-en'>Onion</span> 向导</p>
                        <p className='portal-text'>建立研究的“假说”，结构良好的假说是研究题目的基础，<span className='bold-text p-en' >Onion</span> 辅助研究者进行。</p>
                        <p className='portal-text'>规范的研究题目应该符合“<span className='bold-text p-en' >PICOST</span>”，<span className='bold-text p-en' >Onion</span> 解释给研究者，向导研究者确定规范的“题目”</p>
                    </div>
                    <div className='grid-img'>
                        <img src={module2_interaction} alt='module2_interaction'/>
                    </div>
                </div>
                
                <div className='grid-container'>
                    <div>
                        <p className='portal-subtitle'>采用什么研究类型？<span className='p-en'>Onion</span> 辅助研究者轻松决策</p>
                        <p className='portal-text'>界面交互，<span className='bold-text p-en' >Onion</span> 理解研究者的研究的具体情境，根据情况辅助决策研究适合的“研究类型”。</p>
                        <p className='portal-text'><span className='bold-text p-en' >RCT？Cohort study？</span>还是 <span className='bold-text p-en'>Case-control study？</span>……</p>
                    </div>
                    <div>
                        <p className='portal-subtitle'>确定研究“技术路径”<span className='p-en'>(Path)</span></p>
                        <p className='portal-text'><span className='bold-text p-en' >Onion</span> 发出提示，让研究者自由选择研究技术路径<span className='bold-text p-en' >(Path)</span></p>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={module2_remind} alt='module2_remind'/>
                    </div>
                    <div className='grid-content'>
                        <p className='portal-subtitle'>交互提示</p>
                        <p className='portal-text'>界面交互，用户在交互存在不易理解时，可根据<span className='bold-text p-en' >Onion</span> 的提示，轻松完成交互……</p>
                        <p className='portal-text'><span className='bold-text p-en' >Onion</span> 理解研究者的研究的具体情境，根据情况辅助决策研究适合的“研究类型”</p>
                        <p className='portal-text'><span className='bold-text p-en' >RCT？Cohort study？</span>还是 <span className='bold-text p-en'>Case-control study？</span>……</p>
                        <p className='portal-text'>辅助决策适合的研究类型、研究设计</p>
                    </div>
                    
                </div>
                <div className='grid-container'>
                    <div className='grid-content'>
                        <p className='portal-subtitle'><span className='p-en'>AI</span> 辅助，形成研究的关键框架<span className='p-en'>(Framework)</span>：</p>
                        <p className='portal-text'><span className='bold-text p-en' >Onion</span> 的<span className='bold-text p-en' >AI</span>算法，根据用户交互的信息，一键式生成了研究“<span className='bold-text p-en' >Framework</span>”（关键框架），在这个“<span className='bold-text p-en' >Framework</span>”里面包括了研究非常关键的、也是经常困扰临床研究者的问题之解决方案，包括：</p>
                        <p className='portal-text'>如何假设、研究设计、是否“巢氏”、“如何随机”、“样本量估计方法”、“统计学分析方法”、“变量处理”、“偏倚控制策略”、“敏感性分析”、“亚组分析”……</p>
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
                        <p className='portal-subtitle'>研究方案 & 报告，<span className='p-en'>Onion</span> 向导下轻松撰写</p>
                        <p className='portal-text'>规范的研究方案“模版”，针对每个模块 <span className='bold-text p-en' >Onion</span>  都发出提示，研究者只需跟随 <span className='bold-text p-en' >Onion</span>  的向导即可高效的完成一份研究方案 & 报告；</p>
                        <p className='portal-text'>质量有保证的方案、考虑全面的方案……</p>
                        <p className='portal-text'>以研究方案规范形式呈现给研究者，事倍功半！</p>
                    </div>
                </div>
                <PortalSlogen/>
                <Footer/>    
            </div>
            
        )
    }
}

export default withRouter(Portal_page);