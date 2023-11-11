import React from 'react';

import './index.css';

import { withRouter } from 'react-router'; 

class Slogan extends React.Component {
   
    
    render(){
        return (
            <div className='slogan'>
                
                <p className='slogan-title'>Idea <span className='green-text'>→</span> Evidence</p>
                
                <p><span className='bold-text p-en'>Onion，</span> 临床研究者的 <span className='bold-text p-en'>AI</span> 助手，轻轻松松做研究</p>
                <br/>
                <p><span className='bold-text p-en'>With Onion</span>，研究者灵感被激发、创新被延展</p>
                <p><span className='bold-text p-en'>With Onion</span>，研究变得轻松，不再如以往耗时费力</p>
                <p><span className='bold-text p-en'>With Onion，Healthcare company employee </span> 可以成为 <span className='bold-text p-en'>KOL</span> 的研究“咨询顾问”</p>
                <p><span className='bold-text p-en'>With Onion</span>，医学生们有了临床研究的 “<span className='bold-text p-en'>personal AI trainer</span>”</p>
                <div className='onion-slogan-btn-group'>
                    <div className='onion-btn' onClick={() => window.location.href='http://101.34.173.29/onion/api/index/toLogin'}>
                        <div className='button'>Log in Onion RsearchAI<span id='copy-right'> ®</span></div>
                    </div>
                    <div className='onion-btn' onClick={() => window.location.href='http://101.34.173.29/onion2/api//index/toLogin'}>
                        <div className='reverse-button'>Log in Onion | Cataly<span id='copy-right'> ®</span></div>
                    </div>
                </div>
                
            </div>   
        )
    }
}

export default withRouter(Slogan);