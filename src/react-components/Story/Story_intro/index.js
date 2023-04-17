import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import story_intro from '../../../content-img/story-intro.jpg'

 

class Story_intro extends React.Component {
   
    
    render(){
        return (
            <div className='security-intro-container'>
                <div className='security-intro-content'>
                    <div className='security-left'>
                        <p className='intro-title'><spna className='p-en'>Onion </spna><span id='copy-right'>TM</span>，核心是为医生研究者 & healthcare companies 在研究领域提供核心价值</p>
                        <p className='portal-text'><span className='bold-text p-en'>With Onion</span> 使医生研究者更轻松、更高质量的完成研究过程，取得循证证据；</p>
                        <p className='portal-text'><span className='bold-text p-en'>With Onion</span> 使 <span className='bold-text p-en'>healthcare companies</span> 与 <span className='bold-text p-en'>KOL</span> （研究者）的互动更具学术价值，助力新的战略合作 </p>
                        <div className='button-set'>
                            <button className='security-btnL'><span className='p-en'>Successful story … …</span></button>
                            <button className='security-btnR'><span className='p-en'>More value … …</span></button>
                        </div>
                        
                    </div>
                    <div className='security-right'>
                        <img src={story_intro} alt="Intro_img" ></img>
                    </div>
                </div>  
            </div>     
        )
    }
}

export default withRouter(Story_intro);