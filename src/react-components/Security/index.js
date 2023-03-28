import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import security_img1 from '../../content-img/security-img1.png'
import SecurityIntro from './Security_intro';


class Security_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <SecurityIntro/>
                <div className='security-list'>
                    <div className='subtitle-col'>
                        <p className='portal-text'>我们确保您的私人信息保密</p>
                    </div>
                    <div className='subtitle-col'>
                        <p className='portal-text'>我们的安全基础设施建立在行业标准之上</p>
                    </div>
                    <div className='subtitle-col'>
                        <p className='portal-text'>企业级认证验证我们的安全控制</p>
                    </div>
                </div>
                <div className='security-container'>
                    
                    <div className='security-content'>
                        <p className='security-text'>我们不泄露您的数据</p>
                        <p className='portal-text'>我们期望用户采购我们的付费产品之一，原因是 <span className='bold-text p-en'>Onion</span> 临床研究辅助决策服务，并给与用户好的体验。<span className='bold-text p-en'>Onion</span> 依靠有价值的服务获取利润。</p>
                        <p className='portal-text'>我们过去没有、现在没有、将来也不会泄露用户数据</p>
                    </div> 
                    <div className='security-img'>
                        <img src={security_img1} alt='security-img1'/>
                    </div>                 
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Security_Page);