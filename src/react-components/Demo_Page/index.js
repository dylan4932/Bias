import React from 'react';

import './index.css';
import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
// import demo_img2 from '../../content-img/demo-img2.png'
// import demo_img3 from '../../content-img/demo-img3.png'
// import demo_img5 from '../../content-img/demo-img5.png'
// import demo_img6 from '../../content-img/demo-img6.png'
// import demo_img7 from '../../content-img/demo-img7.png'
// import demo_img9 from '../../content-img/demo-img9.png'
// import demo_video1 from '../../content-video/module1-phase1.mp4'
// import demo_video2 from '../../content-video/module2-interaction.mp4'
// import demo_video3 from '../../content-video/module3.mp4'
import module1_phase2 from '../../content-img/module1-phase2.png'
import module1_phase3 from '../../content-img/module1-phase3.png'
import module2_phase1 from '../../content-img/module2-phase1.png'
import module2_path from '../../content-img/module2-path.png'
import module2_framework from '../../content-img/module2-framework.png'
import module3_research from '../../content-img/module3-research.png'
import {  PlayPause1, PlayPause2, PlayPause3 } from '../../actions/action';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

class Demo_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <div className='demo-space'></div>
                <div className='demo-container'>
                    <div className='grid-video'>
                        <video muted autoPlay loop
                            src='https://onion-1256470382.cos.ap-shanghai.myqcloud.com/module1-phase1.mp4'
                            id='demo-video1'/>
                        <div className='video-control'>
                            <i className='demo-play' id='video1-con'> 
                                <AiOutlinePauseCircle display="block" onClick={PlayPause1} id='pauseCircle1' cursor="pointer"/>
                                <AiOutlinePlayCircle display="none" onClick={PlayPause1} id='playCircle1' cursor="pointer"/>
                            </i>
                        </div>
                        
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>界面交互，告诉 <span className='p-en'>Onion</span> 研究梗概</p>
                        <p className='demo-text'><span className='bold-text p-en'>Onion AI</span> 分析研究者拟定研究领域的指南、共识、文献……提出有价值的“研究课题”建议，延展研究者的研究创新；并帮助研究者聚焦于具有临床实践意义的课题方向</p>
                        <br/>
                        <p className='demo-subtitle double-space'><span className='p-en'>Onion</span> 激发灵感</p>
                        <p className='demo-text double-demo-text'><span className='bold-text p-en'>Onion</span> 从多个维度提出突破“先验研究”的建议，使研究者在科研上“迈出前沿一小步、推进前沿一大步”</p>
                    </div>
                    
                </div>
                <div className='grid-container'>
                    <div className='grid-content'>
                        <p className='portal-subtitle'><span className='p-en'>Onion</span> 导引文献积累，找到研究创新</p>
                        <p className='portal-text portal-content'>如果文献检索不能进行有效的分析，则不能为研究提供帮助。文献积累应该怎样做？<span className='bold-text p-en' >Onion</span> 导引研究者积累文献，并作出分析图表</p>
                        <p className='portal-text portal-content'>先验研究的重要信息呈现在“检索文献归纳”中。一目了然！</p>
                        <p className='portal-text portal-content'><span className='bold-text p-en' >Onion</span> 从多个维度提出突破“先验研究”的建议，延展研究者的研究创想；使研究成为“迈出前沿的一小步、推进前沿的一大步”</p>
                    </div>
                    <div className='grid-img'>
                        <img src={module1_phase2} alt='module1_phase2'/>
                    </div>
                </div>
                <div className='grid-container'>    
                    <div className='grid-content'>
                        <p className='portal-subtitle'>书写研究题目，<span className='p-en'>Onion</span> 向导</p>
                        <p className='portal-text portal-content'>建立研究的“假说”，结构良好的假说是研究题目的基础，<span className='bold-text p-en' >Onion</span> 辅助研究者进行。</p>
                        <p className='portal-text portal-content'>规范的研究题目应该符合“<span className='bold-text p-en' >PICOST</span>”，<span className='bold-text p-en' >Onion</span> 解释给研究者，向导研究者确定规范的“题目”</p>
                    </div>
                    <div className='grid-img'>
                        <img src={module1_phase3} alt='module1_phase3'/>
                    </div>
                </div>

                {/* Module - 2 */}
                <div className='demo-container'>
                    <div className='grid-video'>
                        <video muted autoPlay loop
                            src='https://onion-1256470382.cos.ap-shanghai.myqcloud.com/module2-interaction.mp4'
                            id='demo-video2'/>
                        <i className='demo-play'>  
                            
                            <AiOutlinePauseCircle display="block" onClick={PlayPause2} id='pauseCircle2' cursor="pointer"/>
                            <AiOutlinePlayCircle display="none" onClick={PlayPause2} id='playCircle2' cursor="pointer"/>
                        </i>
                        
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>交互提示</p>
                        <p className='demo-text'>界面交互-在交互时，用户若存在不理解的研究内容，可根据<span className='bold-text p-en'>Onion</span> 的提示，轻松理解并完成交互……</p>
                        
                    </div>                   
                </div>
                <div className='grid-container'>
                    <div className='demo-content' id='move-down'>
                        <p className='portal-subtitle'>采用什么研究类型？<span className='p-en'>Onion</span> 辅助研究者轻松决策</p>
                        <p className='portal-text portal-content'>界面交互，<span className='bold-text p-en' >Onion</span> 理解研究者的研究的具体情境，根据情况辅助决策研究适合的“研究类型”。</p>
                        <p className='portal-text portal-content'><span className='bold-text p-en' >RCT？Cohort study？</span>还是 <span className='bold-text p-en'>Case-control study？</span>……</p>
                    </div>
                    <div className='grid-img'>
                        <img src={module2_phase1} alt='module2_phase1'/>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={module2_path} alt='module2_path'/>
                    </div>
                    <div className='demo-content' id='move-down'>
                        <p className='portal-subtitle'>确定研究“技术路径”<span className='p-en'>(Path)</span></p>
                        <p className='portal-text'> 研究者 根据自己的实际情境，信息交互 <span className='p-en'>Onion</span> 界面上的问题，<span className='p-en'>Onion</span> 推荐适合的研究类型共研究者参考。是 <span className='p-en'>RCT</span> 、队列、病例对照研究？巢氏？……</p>
                        <p className='portal-text portal-content'> 研究者参考并自由选择研究技术路径（<span className='bolder'>研究目的 & 研究类型</span>）</p>
                    </div>
                </div>
                <div className='demo-container'>
                    <div className='demo-content'>
                        <p className='demo-subtitle'><span className='p-en'>AI</span> 辅助，形成研究的关键框架（<span className='p-en'>Framework</span>）：</p>
                        <p className='demo-text'><span className='bold-text p-en'>Onion</span>的<span className='bold-text p-en'>AI</span>算法，根据用户交互的信息，一键式生成了研究“<span className='bold-text p-en'>Framework</span>”（关键框架），在“<span className='bold-text p-en'>Framework</span>”里，包括了解决方案，这个方案解决了研究中非常关键、也经常困扰临床研究者的问题，如：</p>
                        <p className='demo-text'>如何假设、研究设计、是否“巢氏”、“如何随机”、“样本量估计方法”、“统计学分析方法”、“变量处理”、“偏倚控制策略”、“敏感性分析”、“亚组分析”……</p>
                    </div>
                    <div className='grid-img'>
                        <img src={module2_framework} alt='module2_framework'/>
                    </div>
                </div>
                
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={module3_research} alt='module3_research'/>
                    </div>
                    <div className='demo-content' id='move-down'>
                        <p className='portal-subtitle'>研究方案 & 报告，<span className='p-en'>Onion</span> 向导下轻松撰写</p>
                        <p className='portal-text'> 规范的研究方案“导引”，针对每个撰写模块 <span className='bold-text p-en'>Onion</span> 都发出提示，研究者只需跟随 <span className='bold-text p-en'>Onion</span> 的向导即可高效的完成一份研究方案 & 报告；</p>
                        <p className='portal-text'> 质量有保证的方案、考虑全面的方案……</p>
                        <p className='portal-text'> 以研究方案规范形式呈现给研究者，事半功倍！</p>
                    </div>
                </div>
                <div className='demo-container'>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>研究方案 & 报告，<span className='p-en'>Onion</span> 向导下轻松撰写</p>
                        <p className='demo-text'>规范的研究方案“向导”，针对每个模块 <span className='bold-text p-en'>Onion</span> 都发出提示，研究者只需跟随 <span className='bold-text p-en'>Onion</span> 的向导即可高效的完成一份研究方案 & 报告；</p>
                        <p className='demo-text'>质量有保证的方案、考虑全面的方案……</p>
                        <p className='demo-text'>以研究方案规范形式呈现给研究者，事半功倍！</p>
                    </div>
                    <div className='grid-video'>
                        <video muted autoPlay loop
                            src='https://onion-1256470382.cos.ap-shanghai.myqcloud.com/module3.mp4'
                            id='demo-video3'/>
                        <i className='demo-play'>  
                            <AiOutlinePauseCircle display="block" onClick={PlayPause3} id='pauseCircle3' cursor="pointer"/>
                            <AiOutlinePlayCircle display="none" onClick={PlayPause3} id='playCircle3' cursor="pointer"/>
                        </i>
                        
                    </div>
                </div>
                
                <div className='demo-space'></div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Demo_Page);