import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import communicate_intro from '../../../content-img/communicate-intro.png'

 

class Communicate_intro extends React.Component {
   
    
    render(){
        return (
            <div className='communicate-container'>
                <div className='communicate-content'>
                    <div className='communicate-left'>
                        <p id='title'>与 “KOL”的沟通互动，越来越不容易。如何以更有价值的、新的方式与 KOL 互动？</p>
                        <p>很长时间以来，我们通过“信息的传递”体现给 KOL 的价值，但随着信息互联时代，我们不再具有“医疗”方面的信息优势了。</p>
                        <p>“临床研究”是 KOL 有价值的互动领域，我们有机会重塑此领域的“互动优势”，但我们需要系统性的支持。</p>
                        <div className='button-set'>
                            <button className='comm-btnL'>Topic（话题）… …</button>
                            <button className='comm-btnR'>Solution（解决方案）… …</button>
                        </div>
                        
                    </div>
                    <div className='communicate-right'>
                        <img src={communicate_intro} alt="Intro_img" ></img>
                    </div>
                </div>  
                
            </div>     
        )
    }
}

export default withRouter(Communicate_intro);