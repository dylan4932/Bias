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
                        <p id='title'>设计研究、统计分析、方案 & 报告，怎样做？</p>
                        <p>头脑中有大量的临床经验 & 很好的治疗观点，但我想通过研究将它们变为“证据”时，常常感到“无助”。</p>
                        <p>在我擅长的临床领域，如何寻找好的研究课题呢？RCT ？还有其他的方法吗？</p>
                        <div className='button-set'>
                            <button className='research-btnL'>Knowledge（知识）… …</button>
                            <button className='research-btnR'>Time（时间）… …</button>
                        </div>
                        
                    </div>
                    
                </div>  
                
            </div>     
        )
    }
}

export default withRouter(Research_content);