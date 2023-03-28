import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import security_intro from '../../../content-img/security-intro.png'

 

class Security_intro extends React.Component {
   
    
    render(){
        return (
            <div className='security-intro-container'>
                <div className='security-intro-content'>
                    <div className='security-left'>
                        <p className='intro-title'>您的信任是我们所做一切的核心</p>
                        <p className='portal-text'><span className='bold-text p-en'>With Onion</span> 进行临床研究的第一步是赢得研究者的信任。我们一直承诺用户的数据得到隐私和保护。</p>
                        <p className='portal-text'>在我擅长的临床领域，如何寻找好的研究课题呢？<span className='bold-text p-en'>RCT</span> ？还有其他的方法吗？</p>
                        <div className='button-set'>
                            <button className='security-btnL'><span className='p-en'>Security</span></button>
                        </div>
                        
                    </div>
                    <div className='security-right'>
                        <img src={security_intro} alt="Intro_img" ></img>
                    </div>
                </div>  
            </div>     
        )
    }
}

export default withRouter(Security_intro);