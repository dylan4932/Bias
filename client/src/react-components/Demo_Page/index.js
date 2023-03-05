import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import Portal_list from '../Portal_list';
import Footer from '../footer';
import demo_img1 from '../../content-img/demo-img1.png'
import demo_img2 from '../../content-img/demo-img2.png'
import demo_img3 from '../../content-img/demo-img3.png'
import demo_img4 from '../../content-img/demo-img4.png'
import demo_img5 from '../../content-img/demo-img5.png'
import demo_img6 from '../../content-img/demo-img6.png'

class Demo_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <Portal_list/>
                <div className='demo-space'></div>
                <div className='demo-container'>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>界面交互，告诉 Onion 研究梗概</p>
                        <p className='demo-text'>Onion AI 分析研究者拟定研究领域的指南、共识、文献，提出有价值的研究课题建议，延展研究者的研究创新；并帮助研究者聚焦于具有临床实践意义的课题方向</p>
                    </div>
                    <div className='demo-img'>
                        <img src={demo_img1} alt='demo-img1'/>
                    </div>
                </div>
                <div className='demo-container'>
                    <div className='grid-img'>
                        <img src={demo_img2} alt='demo-img2'/>
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>Onion 激发灵感</p>
                        <p className='demo-text'>Onion 从多个维度提出突破“先验研究”的建议，使研究者的研究成为“迈出前沿的一小步、推进前沿的一大步”</p>
                    </div>                   
                </div>
                <div className='demo-container'>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>文献积累，Onion 辅助研究者</p>
                        <p className='demo-text'>检索的文献如果不能进行有效的分析则很难为研究提供帮助。文献积累应该怎样做？Onion 向导研究者有导向性的积累文献，并作出分析图表；</p>
                        <p className='demo-text'>先验研究的重要信息，一目了然！</p>
                    </div>
                    <div className='demo-img'>
                        <img src={demo_img3} alt='demo-img3'/>
                    </div>
                </div>
                <div className='demo-container'>
                    <div className='grid-img'>
                        <img src={demo_img4} alt='demo-img4'/>
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>书写研究题目，Onion 向导</p>
                        <p className='demo-text'>建立研究的“假说”，结构良好的假说是研究题目的基础，Onion 辅助研究者进行。</p>
                        <p className='demo-text'>规范的研究题目应该符合“PICOST”，Onion 解释给研究者，向导研究者确定规范的“题目”</p>
                    </div>                   
                </div>
                <div className='demo-container'>
                    <div className='demo-large-img'>
                        <img src={demo_img5} alt='demo-img5'/>
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>采用什么研究类型？Onion 辅助研究者轻松决策</p>
                        <p className='demo-text'>界面交互，Onion 理解研究者的研究的具体情境，根据情况辅助决策研究适合的“研究类型”。</p>
                        <p className='demo-text'>RCT？Cohort study？还是 Case-control study？……</p>
                        <br/>
                        <br/>
                        <br/>
                        <p className='demo-subtitle'>确定研究“技术路径”（path）</p>
                        <p className='demo-text'>Onion 发出提示，让研究者自由选择研究技术路径（path）</p>
                    </div>                   
                </div>
                <div className='demo-container'>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>研究方案 & 报告，Onion 向导下轻松撰写</p>
                        <p className='demo-text'>规范的研究方案“模版”，针对每个模块 Onion 都发出提示，研究者只需跟随 Onion 的向导即可高效的完成一份研究方案 & 报告；</p>
                        <p className='demo-text'>质量有保证的方案、考虑全面的方案……</p>
                        <p>以研究方案规范形式呈现给研究者，事倍功半！</p>
                    </div>
                    <div className='demo-img demo-large-img'>
                        <img src={demo_img6} alt='demo-img6'/>
                    </div>
                </div>
                <div className='demo-space'></div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Demo_Page);