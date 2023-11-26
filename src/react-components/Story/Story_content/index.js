import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import story_content from '../../../content-img/story-content-img.jpg'

 

class Story_content extends React.Component {
   
    
    render(){
        return (
            <div className='story-intro-container'>
                <div className='story-intro-content'>
                <div className='story-left'>
                        <p className='portal-text'> <span className='strong-text'>会前</span>，邀请 KOL & 参会助手们 预先准备拟定研究的 idea、计划、或病例报告。</p>
                        <p className='portal-text'> <span className='strong-text'>会中</span>，<span className='p-en bold-text'>KOLs</span> 与 <span className='bold-text p-en'>Onion RsearchAI<span id='copy-right'> ®</span></span> 系统 进行自己研究情境的交互， <span className='p-en bold-text'>Onion</span> 根据医生的研究情境，通过 <span className='p-en bold-text'>AI</span> 算法提供了此研究的方案。 <span className='p-en bold-text'>KOLs</span> 和他的助手们 饶有兴趣的和自己先前的研究想法进行对照、思考。 </p>
                        <p className='portal-text'> <span className='p-en bold-text'>Onion Rsearch AI</span> 的专家们与 <span className='p-en bold-text'>KOL</span> 进一步研讨研究方案，引发了 大家的热烈讨论 & 学习……</p>
                        <p className='portal-text'> <span className='strong-text'>会后</span>，专家们都意犹未尽，纷纷表示这样的交流非常有趣，并且收获很大。希望常规性的举行这样的会议……</p>
                    </div>
                    <div className='story-right'>
                        <img src={story_content} alt="story_content" ></img>
                    </div>
                </div>  
            </div>     
        )
    }
}

export default withRouter(Story_content);