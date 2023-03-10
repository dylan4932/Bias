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
                        <p id='title'>临床研究，做什么？</p>
                        <p>头脑中有大量的临床经验 & 很好的治疗观点，但我想通过研究将它们变为“证据”时，常常感到“无助”。</p>
                        <p>在我擅长的临床领域，如何寻找好的研究课题呢？RCT ？还有其他的方法吗？</p>
                        <div className='button-set'>
                            <button className='research-btnL'>Source（资源）… …</button>
                            <button className='research-btnR'>Support（帮助）… …</button>
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