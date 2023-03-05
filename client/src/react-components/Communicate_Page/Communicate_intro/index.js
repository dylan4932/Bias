import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import communicate_intro from '../../../content-img/communicate-intro.png'
import communicate_col1 from '../../../onion_icons/communicate-col1.png'
import communicate_col2 from '../../../onion_icons/communicate-col2.png'
import communicate_col3 from '../../../onion_icons/communicate-col3.png'
import communicate_col4 from '../../../onion_icons/communicate-col4.png'
 

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
                <div className='communicate-subtitle'>
                    <div className='subtitle-col'>
                        <img src={communicate_col1} alt='research-colomn-icon1'></img>
                        <p>如何找到对 KOL 有价值的话题？如何获得与 KOL 沟通中的学术优势，并与KOL 进行同一高度的互动？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check' src={communicate_col2} alt='research-colomn-icon2'></img>
                        <p>如何成为临床研究的咨询专家？如何建立 KOL对您个人、品牌 & 组织的认可度？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={communicate_col3} alt='research-colomn-icon3'></img>
                        <p>怎样进行研究类的项目？如何提高KOL 的覆盖？如何优化 KOL的诊疗观念，使您的产品以正确的时机、正确的用法使用于正确的患者？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={communicate_col4} alt='research-colomn-icon4'></img>
                        <p>真实世界证据，有机会引导新产品快速准入，支撑未来政策谈判。如何获得真实世界证据？</p>
                    </div>
                </div>
            </div>     
        )
    }
}

export default withRouter(Communicate_intro);