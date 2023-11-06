import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import story_content from '../../../content-img/security-intro.png'

 

class Story_content extends React.Component {
   
    
    render(){
        return (
            <div className='story-intro-container'>
                <div className='story-intro-content'>
                    <div className='story-left'>
                        <img src={story_content} alt="story_content" ></img>
                        <p className='img-intro'>Marketing Director</p>
                    </div>
                    <div className='story-right'>
                        
                        <p className='story-subtitle'>如何才能真正把我们的市场资源用得更高效呢？另辟蹊径可能会成为行业内一次了不起的创新。</p>
                        <p className='portal-text'>组织的学术会的质量越来越令人担忧，是我们每天都思考的问题。近来我们做了一些新的尝试。我们和 一家专门从事医疗研究领域机构的 <span className='bold-text p-en'>RDG</span> 小组一同探讨了一种新型的学术讨论会。<span className='bold-text p-en'>Onion</span>！一个聚焦于医生临床研究的 <span className='bold-text p-en'>AI</span> 系统。我们将这个系统引入到我们的 <span className='bold-text p-en'>KOL</span> 学术研讨会中。</p>
                        
                    </div>
                </div>  
            </div>     
        )
    }
}

export default withRouter(Story_content);