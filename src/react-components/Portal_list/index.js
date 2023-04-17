import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import onion_icon from '../../onion_icons/onion_lv2.png'

class Portal_list extends React.Component {
   
    
    render(){
        return (
            <div className='portal-list'>
                {/* <div className='banner'>
                    
                </div> */}

                <div className='banner_list'>
                    <a className='onion-icon' href='./../'>
                        <img src={onion_icon} alt='onion_lv2' width="50"/>
                        <p>Onion</p>
                    </a>
                    <ul id='horizontal-list'>
                        <li>
                            
                        </li>
                        <li>
                        <a href='./../Onion-intro'>
                            <span className='bold-text'>Onion</span><span> 是谁?</span> 
                        </a>
                        </li>
                        <li>
                            <a href='./../Researcher'>
                                <span>我是研究者</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Communicate'>
                                <span>与 <span className='bold-text'>KOL</span> 沟通互动</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Education'>
                                <span>医学生整体研究水平提升</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Demo'>
                                <span>演示</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Plan'>
                                <span className="bold-text">Onion </span><span>服务计划</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Data-Security'>
                                <span className='bold-text p-en'>Successful story</span>
                            </a>
                        </li>
                    </ul>
                   <div className='right-content'>

                        
                        <div className='login-btn'>
                            <a href='./Bias-home' className='bias-link'>Log in Bias Dictionari+®</a>
                            <a href='http://www.artdatabanks.com/v3/#/login' className='data-link'>Log in artdataing®</a>
                        </div>
                        <a href='./../About_Page' className='contact-btn'>联系我们</a>
                   </div>
                </div>
            </div>    
        )
    }
}

export default withRouter(Portal_list);