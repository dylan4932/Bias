import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import story_conclude from '../../../content-img/story-conclude.png'

 

class Story_conclude extends React.Component {
   
    
    render(){
        return (
            <div className='story-conclude-container'>
                <div className='story-conclude-content'>
                    <div className='story-left-content'>
                        
                        <p className='story-subtitle'>医学项目，对专家们的价值令我们欣喜，帮助我们的 <span className='p-en'>company</span> 建立了学术的形象、助力了推广</p>
                        <p className='portal-text'>医学项目如何为医生提供学术价值是核心，它可以使医生感受到我们持续对学术的投入，建立在客户心目中的学术形象；当然医学项目也要助力医生对我们药品的深入认知，使产品在合适的时机、合适的方式使用在合适患者身上……</p>
                    </div>
                    <div className='story-right-img'>
                        <img src={story_conclude} alt="story_conclude" ></img>
                        <p className='img-intro'>Leo : a Clinical Manager</p>
                        
                    </div>
                </div>  
            </div>     
        )
    }
}

export default withRouter(Story_conclude);