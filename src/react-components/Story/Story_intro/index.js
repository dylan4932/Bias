import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import story_intro from '../../../content-img/story-intro.jpg'

 

class Story_intro extends React.Component {
   
    
    render(){
        return (
            <div className='security-intro-container'>
                <div className='security-intro-content'>
                    <div className='security-left'>
                        <img src={story_intro} alt="Intro_img" ></img>
                        <p className='img-intro'>Marketing Director</p>
                    </div>
                    <div className='security-right'>
                        <p className='intro-title'><span className='p-en'>Onion </span>，核心是为医生研究者 & <span className='p-en'>healthcare companies</span> 在研究领域提供核心价值</p>
                        <p className='portal-text'> 如何将我们的市场资源投入得更有效呢？提供真正的学术价值是关键！目前的学术拜访 & 会议为医生们提供得学术价值越来越有限。</p>
                        <p className='portal-text'> 我们必须另辟蹊径，创新是必由之路！</p>
                        <p className='portal-text'> 我们做了一些新的尝试。我们和 一家专门从事医疗研究的机构一同探讨了一种新型的学术活动 — <span className='p-en bold-text'>Onion Experience Meeting！</span>一种可以让医生们在临床研究领域进行“沉浸体验”的学术活动。</p>
                        <div className='button-set'>
                            <button className='security-btnL'><span className='p-en'>Successful story … …</span></button>
                            <button className='security-btnR'><span className='p-en'>More value … …</span></button>
                        </div>
                        
                    </div>
                </div>  
            </div>     
        )
    }
}

export default withRouter(Story_intro);