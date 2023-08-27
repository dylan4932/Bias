import React from 'react';

import './index.css';

import { withRouter } from 'react-router'; 

class Slogan extends React.Component {
   
    
    render(){
        return (
            <div className='slogan'>
                
                <p className='slogan-title'>With Onion , Research idea <span className='green-text'>→</span> Evidence</p>
                
                <p><span className='bold-text p-en'>With Onion, Healthcare companies</span> 可以成为 <span className='bold-text p-en'>KOL</span>的科研 “<span className='bold-text p-en'>Solution</span>专家”，提高客户满意度</p>
                <p><span className='bold-text p-en'>With Onion</span>，研究者的研究灵感被激发</p>
                <p><span className='bold-text p-en'>Onion</span>， 研究者的“<span className='bold-text p-en'>Guide</span>”（向导）、 “<span className='bold-text p-en'>Decision aid</span>”（决策辅助）</p>
                <p><span className='bold-text p-en'>With Onion</span>，医学生的“<span className='bold-text p-en'>personal trainer</span>”（一对一<span className='bold-text p-en'> AI</span> 教练），提高医疗机构整体临床研究能力</p>
                <div className='onion-btn' onClick={() => window.location.href='http://101.34.173.29/onion/api/index/toLogin'}>
                    <div className='button'>Log in Onion</div>
                </div>
            </div>   
        )
    }
}

export default withRouter(Slogan);