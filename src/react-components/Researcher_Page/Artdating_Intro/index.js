import React from 'react';

import './index.css';
import { withRouter } from 'react-router';
import demo_img9 from '../../../content-img/demo-img9.png'
 

class ArtdatingIntro extends React.Component {
   
    
    render(){
        return (
            <div className='demo-sticker-container'>
                    <div className='demo-content'>
                        <button className="data-button">
                            <a href='http://www.artdatabanks.com/v3/#/login'>
                                <span >Log in artdataing <sup id='copy-right'> ®</sup></span>
                            </a>
                        </button>
                        <p className='demo-subtitle'>数据处理，预分析</p>
                        <p className='demo-text' id='artdating-intro-content'>研究者研究数据一键式输入，即可在 <span className='bold-text p-en'>artdataing <sup id='copy-right'> ®</sup></span> （统计数据库）中进行研究的分组、生成派生指标、统计学预分析、偏倚控制……</p>
                    </div>
                    <div className='demo-sticker'>
                        <img src={demo_img9} alt='demo-img9'/>
                    </div>
                </div>    
        )
    }
}

export default withRouter(ArtdatingIntro);