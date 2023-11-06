import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import research_intro from '../../../content-img/onion-intro-left-img.png'

 

class Onion_intro extends React.Component {
   
    
    render(){
        return (
            <div className='onion-intro-container'>
                <div className='onion-intro-content'>
                    <div className='onion-intro-left'>
                        <img src={research_intro} alt="Intro_img" ></img>
                    </div>
                    <div className='onion-intro-right'>
                        <p className='intro-title white-text'>现状是“不足够的”</p>
                        <p className='portal-text white-text'>每年，大量的 <span className='bold-text p-en'>RCT</span> 在中国开展，证据等级高、试验内部一致性强是 <span className='bold-text p-en'>RCT</span> 的优势；但耗时长、费用大、试验设计距离临床实践环境相去较远，成为 <span className='bold-text p-en'>RCT</span> 试验结果外推性的局限、这些又都是 <span className='bold-text p-en'>RCT</span> 的弱势，仅仅只有 <span className='bold-text p-en'>RCT</span> 是“不足够的”。近年来“真实世界证据”因为距离临床实践更加贴近而被重视。</p>
                        <p className='portal-text white-text'>临床医生日常工作繁忙，很难做到研究方法学的系统掌握，仅仅依靠自身的能力进行研究是“不足够的”。</p>
                        <p className='portal-text white-text'>好的研究设计专家 & 统计学专家是极其“稀缺的”，仅仅依靠“稀缺”的专家是“不足够的”</p>
                        <br></br>
                        <p className='portal-text white-text'>这些使能够胜任研究任务的先进 <span className='bold-text p-en'>AI</span> 辅助决策系统来解决问题成为未来的选择。</p>
                    </div>
                </div>  
                
            </div>     
        )
    }
}

export default withRouter(Onion_intro);