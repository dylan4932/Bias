import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import research_intro from '../../../content-img/research-intro.png'
import research_col1 from '../../../onion_icons/research-col1.png'
import research_col2 from '../../../onion_icons/research-col2.png'
import research_col3 from '../../../onion_icons/research-col3.png'
import research_col4 from '../../../onion_icons/research-col4.png'
 

class Research_intro extends React.Component {
   
    
    render(){
        return (
            <div className='research-container'>
                <div className='research-content'>
                    <div className='research-left'>
                        <p id='title'>临床研究，做什么？</p>
                        <p>头脑中有大量的临床经验 & 很好的治疗观点，但我想通过研究将它们变为“证据”时，常常感到“无助”。</p>
                        <p>在我擅长的临床领域，如何寻找好的研究课题呢？RCT ？还有其他的方法吗？</p>
                        <div className='button-set'>
                            <button className='research-btnL'>Source（资源）… …</button>
                            <button className='research-btnR'>Support（帮助）… …</button>
                        </div>
                        
                    </div>
                    <div className='research-right'>
                        <img src={research_intro} alt="Intro_img" ></img>
                    </div>
                </div>  
                <div className='research-subtitle'>
                    <div className='subtitle-col'>
                        <img src={research_col1} alt='research-colomn-icon1'></img>
                        <p>临床专家应该将研究主题聚焦于“临床实践”，怎样才能在临床实践中挖掘好的“研究方向”呢？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col2} alt='research-colomn-icon2'></img>
                        <p>“文献检索、文献积累”对研究课题的确立大有脾益，但如何积累文献才能有助于研究课题的成立呢？。</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col3} alt='research-colomn-icon3'></img>
                        <p>总听到其他专家用一组病例队列可以做多个研究，发表多篇文献，怎样才能具有这样的研究灵感呢？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={research_col4} alt='research-colomn-icon4'></img>
                        <p>如何表达有价值的、规范的研究题目，让人一目了解研究的价值和本质呢？</p>
                    </div>
                </div>
            </div>     
        )
    }
}

export default withRouter(Research_intro);