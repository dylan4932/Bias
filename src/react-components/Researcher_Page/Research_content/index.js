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
                        <p className='portal-text'>临床专家并非研究设计专家 或 统计分析专家，获得一份优秀的研究方案 & 统计分析计划通常花费太多的精力与时间。</p>
                        <p className='portal-text'>寻求研究设计 & 统计分析专家的帮助，也需要大量的知识和时间，是否有更高效的方式？</p>
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