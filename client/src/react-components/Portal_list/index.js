import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import onion_icon from '../../onion_icons/onion_lv2.png'


class Portal_list extends React.Component {
   
    
    render(){
        return (
            <div className='portal-list'>
                <div className='banner'>
                    <div className='onion_icon'>
                        <img src={onion_icon} alt='onion_lv2' width="50"/>
                        <div className='onion'>Onion</div>
                    </div>
                </div>

                <div className='banner_list'>
                    <ul id='horizontal-list'>
                        <li>
                        <a href='./../Onion-intro?id=100027816925'>
                            <span className='bold-text'>Onion 是谁?</span> 
                        </a>
                        </li>
                        <li>
                            <a href='./../Researcher?id=100027816925'>
                                <span className='bold-text'>我是研究者</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Communicate?id=100027816925'>
                                <span className="bold-text">与 KOL 沟通互动</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Education?id=100027816925'>
                                <span className='bold-text'>医学生整体研究水平提升</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Demo?id=100027816925'>
                                <span className='bold-text'>演示</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Plan?id=100027816925'>
                                <span className="bold-text">Onion 服务计划</span>
                            </a>

                        </li>
                        <li>
                            <a href='./../Data-Security?id=100027816925'>
                                <span className='bold-text'>数据安全</span>
                            </a>
                        </li>
                    </ul>
                   <div className='right-content'>
                        <a href='./../Contact-Us?id=100027816925'>
                            <span className="bold-text">联系我们</span>
                        </a>
                   </div>
                </div>
            </div>    
        )
    }
}

export default withRouter(Portal_list);