import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

 

class  BiasSlogan extends React.Component {
   
    
    render(){
        return (
            <div className='bias-slogan'>
                <p className='bias-slogan-title'>Search bias, Insight bias,  <span className='green-text'>→</span> Control bias</p>
                <p>检索可能产生的偏倚，认知和理解偏倚 <span className='green-text bold-text'>→</span> 控制研究中的偏倚</p>
                <br/>
                <br/>
                <p className='bias-slogan-subtitle'> 欢迎来到 Bias Dictionari+® </p>
                <p>Bias Dictionari+® 是一个学术项目，尽量多的、全面的收录临床研究中的 Bias（偏倚），并对每一个 Bias（偏倚）， 进行详细的注释，包括：命名、产生背景、对研究结果的影响并尽量以实例说明 …… </p>
                <p className='a-lineheight'>目前， Bias Dictionari+® 是世界范围内收录、注释 Bias（偏倚） 种类最多的项目之一。</p>
                <div className='bias-slogan-btn'>
                    <button className="button">
                        <a href='/bias-login'>Log in Bias</a></button>
                </div>
            </div>     
        )
    }
}

export default withRouter(BiasSlogan);