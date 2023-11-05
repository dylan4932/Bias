import React from 'react';

import './index.css';

import { withRouter } from 'react-router'; 

class BiasSlogan extends React.Component {
   
    
    render(){
        return (
            <div className='portal-slogan'>
                <p className='portal-slogan-title'>Idea <span className='green-text'>→</span> Evidence</p>
                
                <p><span className='bold-text p-en bolder'>Onion，</span> 临床研究者的 <span className='bold-text p-en bolder'>AI</span> 助手，轻轻松松做研究</p>
                <br></br>
                <p><span className='bold-text p-en bolder'>With Onion</span>，研究者的研究灵感被激发</p>
                <p><span className='bold-text p-en bolder'>With Onion</span>，研究变得轻松，不再如以往耗时费力</p>
                <p><span className='bold-text p-en bolder'>With Onion，Healthcare company employee </span> 可以成为 <span className='bold-text p-en bolder'>KOL</span> 的研究“咨询顾问”</p>
                <p><span className='bold-text p-en bolder'>With Onion</span>，医学生们有了临床研究的 “<span className='bold-text p-en bolder'>personal AI trainer</span>”</p>
                <div className='bias-data-btn'>
                    <button className="bias-button">
                        <a href='http://101.34.173.29/onion/api/index/toLogin'>
                            <span>Log in Onion ResearchAI <sup id='copy-right'> ®</sup></span>
                        </a>
                    </button>
                    <button className="data-button">
                        <a href='http://101.34.173.29/onion2/api//index/toLogin'>
                            <span>Log in Onion | Cataly <sup id='copy-right'> ®</sup></span>
                        </a>
                    </button>
                </div>
                <br/>
                <br/>
                <br/>
            </div>   
        )
    }
}

export default withRouter(BiasSlogan);