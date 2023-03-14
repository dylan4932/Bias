import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 

class BiasList extends React.Component {
   
    
    render(){
        return (
            <div className='bias-list-component'>
                <div className='bias-banner-container'>
                    
                    <a href='./Bias-home' className='bold-text p-en'>Bias Dictionari+®</a>
                    <div className='bias-banner-border'></div>
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
                   {/* <div className='bias-banner-right-btn-set'>
                        <div className='login-btn' onClick={()=>Dropdown()}> 
                            <span className="links_name">Log in</span>
                            <i><IoIosArrowDown /></i>
                        </div>
                        <a href='./../About_Page' className='contact-btn'>联系我们</a>
                   </div> */}
                </div>
            </div>    
        )
    }
}

export default withRouter(BiasList);