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
                        <p className='intro-title'><span className='p-en'>Onion</span>，交互 & 辅助决策，为您的研究量身定制</p>
                        <p className='portal-text'><span className='bold-text p-en'>Onion</span> 在临床研究领域的辅助决策处于领先地位，不仅仅是给您一个研究文案书写的模版。</p>
                        <p className='portal-text'>通过界面与用户交互，<span className='bold-text p-en'>Onion</span> 可以辅助您找到适合的研究方向、激发研究者的研究灵感、书写规范的研究题目。</p>
                        <p className='portal-text'>经过 <span className='bold-text p-en'>AI</span> 决策，<span className='bold-text p-en'>Onion</span> 将在研究的类型、设计、技术路径、样本量估计、统计学方法、偏倚控制策略等方面为研究者提供 <span className='bold-text p-en'>AI</span> 辅助。</p>
                        <p className='portal-text'><span className='bold-text p-en'>Onion</span> 的辅助对用户意味着更高质量的研究设计、分析、方案 & 报告；同时也为您节省大量的时间 & 精力。</p>
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