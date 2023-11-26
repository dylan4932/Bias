import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import story_intro from '../../../content-img/story-component-img.png'
import story_component from '../../../content-img/story-component-img2.png'

 

class Story_component extends React.Component {
   
    
    render(){
        return (
            <div className='story-component'>
                <div className='story-component-container'>
                    <div className='story-component-content'>
                        <div className='story-component-left'>
                            <img src={story_intro} alt="Intro_img" ></img>
                            
                        </div>
                        <div className='story-component-right'>
                            <p className='portal-text'> 临床研究是我们工作中挺重要的一部分，但是它不是日常的每天都要做的工作，“研究设计、统计分析方面的知识用时需要、平时顾不上、也记不住”。</p>
                            <p className='portal-text'> 理想状况是：有研究需求时，我们医生提出研究的 idea，一个团队可以及时的提供个性化的研究全流程支持，而且能反映迅速、随叫随到更好！&#128512;</p>
                            <p className='portal-text'> <span className='p-en bold-text'>Pharmaceutical</span> 经常赞助学术活动、和医生的接触较多。如果在这些活动中和接触中能能够获得这样的研究支持工作，那么这样的活动和接触才是非常有价值的。</p>
                            <p className='portal-text'> 未来，如果可以进行 <span className='p-en bold-text'>Pharmaceutical + Onion AI</span> 系统的结合，提供研究的学术支持，这个可以帮我们的研究解决很多问题。哪个 <span className='p-en bold-text'>Pharmaceutical</span> 率先做起来，哪个公司在未来发展就会领先一步，取得优势。这才是一个学术性公司应该做的事情，真正对医生的学术发展有帮助的事情。</p>
                        </div>
                    </div>  
                </div> 
                <div className='second-story-component-container'>
                    <div className='story-component-content'>
                        <div className='second-story-component-left'>
                            <p className='portal-text'> 单方面考虑学术活动宣传 <span className='p-en bold-text'>Pharmaceutical</span> 的产品是不可行的，首先应该考虑活动能给 <span className='p-en bold-text'>Dr</span> 带来的价值。</p>
                            <p className='portal-text'> <span className='p-en bold-text'>Onion Experience</span> 是一种创新的看学术活动，虽然形式上与“病例讨论会差不多，但本质上是不小创新。它可以使 <span className='p-en bold-text'>Dr</span> 的研究 <span className='p-en bold-text'>Idea</span> 进行实践体验，给 <span className='p-en bold-text'>Dr</span> 带来很大的学术价值。</p>
                            <p className='portal-text'> <span className='p-en bold-text'>Onion</span> 就是使研究变得简单。操作人人都可以上手。如果我们的员工都学会 <span className='p-en bold-text'>Onion</span> 的操作，引导医生的研究，那必将是我们和医生互动模式的革新，这很让人期待。</p>
                            <p className='portal-text'> 从价值角度看 <span className='p-en bold-text'>Onion</span> 并不贵，相当于 5名 <span className='p-en bold-text'>rep</span> 的人力投入，却具有极大的覆盖效果。</p>
                            <p className='portal-text'> 创新，可能需要打破原有的部门格局。成就行业创新，占据行业领先地位。</p>
                        </div>
                        <div className='second-story-component-right'>
                            <img src={story_component} alt="Intro_img" ></img>
                            <p className='img-intro'>Marketing Director</p>
                        </div>
                    </div>  
                </div> 
            </div>
                
        )
    }
}

export default withRouter(Story_component);