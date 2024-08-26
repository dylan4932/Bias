import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 

class Footer extends React.Component {
   
    
    render(){
        return (
            <div className='footer-container'>
                <div className='footer-other-content'></div>
                <div className='footer-info'> <p>苏州目人医学科技有限责任公司 <a className="footer-link" href='https://beian.miit.gov.cn/'>  备案号：苏ICP备2024100274号-1 </a> </p> </div>
            </div>    
        )
    }
}

export default withRouter(Footer);