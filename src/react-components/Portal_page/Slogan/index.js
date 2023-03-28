import React from 'react';

import './index.css';

import { withRouter } from 'react-router'; 

class Slogan extends React.Component {
   
    
    render(){
        return (
            <div className='slogan'>
                
                <p className='slogan-title'>With Onion , Research idea <span className='green-text'>→</span> Evidence</p>
                
                <p><span className='bold-text p-en'>With Onion</span>，激发研究者的研究灵感；临床研究者的“<span className='bold-text p-en'>Guide</span>”（向导）临床研究者的“<span className='bold-text p-en'>Decision aid</span>”（辅助决策）</p>
                <p><span className='bold-text p-en'>With Onion</span>，成为“<span className='bold-text p-en'>Solution</span> 专家”，提高客户满意度</p>
                <p><span className='bold-text p-en'>With Onion</span>，医学生的“<span className='bold-text p-en'>personal trainer</span>”（一对一辅导），提高整体临床研究能力</p>
                <div className='onion-btn'>
                    <button className="button"variant='contained' >Log in Onion</button>
                </div>
            </div>   
        )
    }
}

export default withRouter(Slogan);