import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import Intro_img from '../../../content-img/intro-img.png'
 

class Onion_intro extends React.Component {
   
    
    render(){
        return (
            <div className='intro-container'>
                <div className='intro-content'>
                    <div className='intro-left'>
                        <p className='intro-title'><span className='p-en bold-text'>Onion</span> 不是 <span className='p-en bold-text'>Template & Writer</span> ，而是 “决策系统”</p>
                        <p className='portal-text'><span className='bold-text p-en'>Onion ResearchAI<span id='copy-right'> ®</span></span> 在临床研究领域的辅助研究者对关键问题进行决策，不是研究文案的书写模版，更不是代写文献的写手；</p>
                        <p className='portal-text'><span className='bold-text p-en'>Onion ResearchAI<span id='copy-right'> ®</span></span> 通过界面与用户交互，辅助您找到适合的研究方向、激发您的研究灵感、延展您的研究创新；</p>
                        <p className='portal-text'><span className='bold-text p-en'>Onion ResearchAI<span id='copy-right'> ®</span></span> 根据具体研究情境，在研究的类型、设计、技术路径、样本量估计方法、统计学方法、偏倚控制策略……等方面为您提供 <span className='p-en bold-text'>AI</span> 辅助决策，轻松获得研究方案；</p>
                        <p className='portal-text'><span className='bold-text p-en'>Onion ResearchAI<span id='copy-right'> ®</span></span> 的辅助对用户意味着更高质量的研究设计、分析、方案 & 报告；使研究不再“耗时费力”</p>
                    </div>
                    <div className='intro-right'>
                        <img src={Intro_img} alt="Intro_img" ></img>
                    </div>
                </div>  
            </div>     
        )
    }
}

export default withRouter(Onion_intro);