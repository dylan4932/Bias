import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import research_content from '../../../content-img/research-content.png'
import research_col1 from '../../../onion_icons/research-col1.png'
import research_col2 from '../../../onion_icons/research-ctn-col2.png'
import research_col3 from '../../../onion_icons/research-ctn-col3.png'
import research_col4 from '../../../onion_icons/research-ctn-col4.png'
 

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
                <div className='research-subtitle'>
                    <div className='subtitle-col'>
                        <img src={research_col1} alt='research-colomn-icon1'></img>
                        <p>我的研究课题不同研究目的下应该采用什么适合的研究类型？何为研究目的？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col2} alt='research-colomn-icon2'></img>
                        <p>研究类型、研究设计、是否“巢氏”、样本量估计方法、统计学分析方法……</p>
                        <p>如何决策？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col3} alt='research-colomn-icon3'></img>
                        <p>如何建立一个好的“研究方案”？包括“研究方案” & “统计分析计划”</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col4} alt='research-colomn-icon4'></img>
                        <p>撰写一份高质量的研究方案 或 报告，应该符合哪些规范、写到什么程度？</p>
                    </div>
                </div>
            </div>     
        )
    }
}

export default withRouter(Research_content);