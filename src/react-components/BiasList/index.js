import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import biasIcon from '../../content-img/bias-icon.png'
import {  logout } from "../../actions/user";

class BiasList extends React.Component {
   
   
    render(){
        const {app, usr} = this.props;
        return (
            <div className='bias-list-component'>
                <div className='bias-banner-container'>
                    
                    <a href='./Bias-home'>
                        <img src={biasIcon} alt='bias-icon'></img>
                    </a>
                </div>  
                <div className='banner-content-container'>
                    <ul id='bias-ul'> 
                        <li>
                        <a href='../Bias-home'>
                            <span className='bold-text p-en'>Home</span> 
                        </a>
                        </li>
                        <li>
                            <a href='../Bias_page'>
                                <span><span className='bold-text p-en'>Bias</span> (偏倚)</span>
                            </a>

                        </li>
                        <li>
                            <a href='../Contact-us'>
                                <span>联系我们</span>
                            </a>
                        </li>
                        <li>
                            <a href='../About_Page'>
                                <span>关于我们</span>
                            </a>
                        </li>
                        
                    </ul>
                   <div className='bias-banner-right-btn-set'>
                        {usr ? (
                                <button 
                                    className='log-out-btn' 
                                    onClick={() => logout(this, app)}>
                                    退出登陆
                                </button>
                            ) : (
                                <div></div>
                        )}
                    </div>
                </div>
            </div>    
        )
    }
}

export default withRouter(BiasList);