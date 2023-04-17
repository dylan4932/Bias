import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import research_intro from '../../../content-img/research-intro.png'

 

class Research_intro extends React.Component {
   
    
    render(){
        return (
            <div className='research-container'>
                <div className='research-content'>
                    <div className='research-left'>
                        <p className='intro-title'>临床研究，做什么？</p>
                        <p className='portal-text'>头脑中有大量的临床经验 & 好的治疗观点，但想通过研究将它们变为“证据”时，常常感到“无助”。</p>
                        <p className='portal-text'>在我擅长的临床领域，如何寻找好的研究课题呢？</p>
                        <p className='portal-text'>惯常的研究类型是 <span className='bold-text p-en'> RCT</span>，但是否所有研究都要做 <span className='bold-text p-en'> RCT</span>？ 还有其他的方法吗？毕竟 <span className='bold-text p-en'> RCT</span> 也有不足。</p>
                        
                        <div className='button-set'>
                            <button className='research-btnL'><span className='bold-text p-en'>Topic</span>（主题）… …</button>
                            <button className='research-btnR'><span className='bold-text p-en'>Research type</span>（研究类型）… …</button>
                        </div>
                        
                    </div>
                    <div className='research-right'>
                        <img src={research_intro} alt="Intro_img" ></img>
                    </div>
                </div>  
                
            </div>     
        )
    }
}

export default withRouter(Research_intro);