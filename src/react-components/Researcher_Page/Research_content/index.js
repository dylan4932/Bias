import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import research_content from '../../../content-img/research-content.png'

class Research_content extends React.Component {
   
    
    render(){
        return (
            <div className='research-container'>
                <div className='research-content'>
                    <div className='research-ctn-left'>
                        <img src={research_content} alt="research-content" ></img>
                    </div>
                    <div className='research-ctn-right'>
                        <p className='intro-title'>设计研究、 统计分析、 方案 & 报告，怎样做？</p>
                        <p className='portal-text'>头脑中有大量的临床经验 & 很好的治疗观点，但我想通过研究将它们变为“证据”时，常常感到“无助”。</p>
                        <p className='portal-text'>在我擅长的临床领域，如何寻找好的研究课题呢？<span className='bold-text p-en'>RCT</span> ？还有其他的方法吗？</p>
                        <div className='button-set'>
                            <button className='research-btnL'><span className='bold-text p-en'>Knowledge</span>（知识）… …</button>
                            <button className='research-btnR'><span className='bold-text p-en'>Time</span>（时间）… …</button>
                        </div>
                        
                    </div>
                    
                </div>  
                
            </div>     
        )
    }
}

export default withRouter(Research_content);