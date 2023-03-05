import React from 'react';

import './index.css';

import { withRouter } from 'react-router'; 
import Button from '@mui/material/Button';

class Slogan extends React.Component {
   
    
    render(){
        return (
            <div className='slogan'>
                <h1>With Onion , Research idea <span className='green-text'>→</span> Evidence</h1>
                <p><span className='bold-text'>With Onion</span>，激发研究者的研究灵感；临床研究者的“<span className='bold-text'>Guide</span>”（向导）临床研究者的“<span className='bold-text'>Decision aid</span>”（辅助决策）</p>
                <p><span className='bold-text'>With Onion</span>，成为“<span className='bold-text'>Solution</span> 专家”，提高客户满意度</p>
                <p><span className='bold-text'>With Onion</span>，医学生的“<span className='bold-text'>personal trainer</span>”（一对一辅导），提高整体临床研究能力</p>
                <div className='login-btn'>
                    <Button id="login-button" className="button"variant='contained' >Login in Onion</Button>
                </div>
                <script>{window.addEventListener("scroll", function(event){
                const scroll = this.scrollY;
                const button = document.getElementById("login-button");
                
                if(scroll>283){
                    button.style.display = "none";
                }
                if(scroll<283){
                    button.style.display = "";
                }
                })}
                </script>
            </div>   
        )
    }
}

export default withRouter(Slogan);