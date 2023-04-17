import React from 'react';

import './index.css';

import { withRouter } from 'react-router'; 

class BiasSlogan extends React.Component {
   
    
    render(){
        return (
            <div className='portal-slogan'>
                <p className='portal-slogan-title'>With Onion , Research idea <span className='green-text'>→</span> Evidence</p>
                <p><span className='bold-text p-en'>With Onion, Healthcare companies</span> 可以成为 <span className='bold-text p-en'>KOL</span>的科研 “<span className='bold-text p-en'>Solution</span>专家”，提高客户满意度</p>
                <p><span className='bold-text p-en'>With Onion</span>，研究者的研究灵感被激发；</p>
                <p><span className='bold-text p-en'>Onion</span>， 研究者的“<span className='bold-text p-en'>Guide</span>”（向导）、 “<span className='bold-text p-en'>Decision aid</span>”（决策辅助）</p>
                <p><span className='bold-text p-en'>With Onion</span>，医学生的“<span className='bold-text p-en'>personal trainer</span>”（一对一<span className='bold-text p-en'> AI</span> 教练），提高医疗机构整体临床研究能力</p>
                <div className='bias-data-btn'>
                    <button className="bias-button" onclick="window.location.href='./Bias-home';">
                        <a href='./Bias-home'>
                            <span>Log in Bias Dictionari+ <sup id='copy-right'>TM</sup></span>
                        </a>
                    </button>
                    <button className="data-button">
                        <a href='http://www.artdatabanks.com/v3/#/login'>
                            <span>Log in artdataing <sup id='copy-right'>TM</sup></span>
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