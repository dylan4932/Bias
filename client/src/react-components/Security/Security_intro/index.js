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
                        <p id='title'>您的信任是我们所做一切的核心</p>
                        <p>With Onion 进行临床研究的第一步是赢得研究者的信任。我们一直承诺用户的数据得到隐私和保护。</p>
                        <p>在我擅长的临床领域，如何寻找好的研究课题呢？RCT ？还有其他的方法吗？</p>
                        <div className='button-set'>
                            <button className='security-btnL'>Security</button>
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