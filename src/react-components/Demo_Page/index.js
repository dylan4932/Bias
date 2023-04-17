import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import demo_img1 from '../../content-img/demo-img1.png'
import demo_img2 from '../../content-img/demo-img2.png'
import demo_img3 from '../../content-img/demo-img3.png'
import demo_img4 from '../../content-img/demo-img4.png'
import demo_img5 from '../../content-img/demo-img5.png'
import demo_img6 from '../../content-img/demo-img6.png'
import demo_img7 from '../../content-img/demo-img7.png'
import demo_img8 from '../../content-img/demo-img8.png'
import demo_img9 from '../../content-img/demo-img9.png'

class Demo_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <div className='demo-space'></div>
                <div className='demo-container'>
                    <div className='grid-img'>
                        <img src={demo_img1} alt='demo-img1'/>
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>界面交互，告诉 <span className='p-en'>Onion</span> 研究梗概</p>
                        <p className='demo-text'><span className='bold-text p-en'>Onion AI</span> 分析研究者拟定研究领域的指南、共识、文献，提出有价值的研究课题建议，延展研究者的研究创新；并帮助研究者聚焦于具有临床实践意义的课题方向</p>
                        <br/>
                        <p className='demo-subtitle double-space'><span className='p-en'>Onion</span> 激发灵感</p>
                        <p className='demo-text double-space'><span className='bold-text p-en'>Onion</span> 从多个维度提出突破“先验研究”的建议，使研究者的研究成为“迈出前沿的一小步、推进前沿的一大步”</p>
                    </div>
                    
                </div>
                <div className='vertical-container'>
                    <div className='grid-img'>
                        <img src={demo_img2} alt='demo-img2'/>
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>文献积累，<span className='p-en'>Onion</span> 辅助研究者</p>
                        <p className='demo-text'>检索的文献如果不能进行有效的分析则很难为研究提供帮助。文献积累应该怎样做？<span className='bold-text p-en'>Onion</span> 向导研究者有导向性的积累文献，并作出分析图表；</p>
                        <p className='demo-text'>先验研究的重要信息，一目了然！</p>
                    </div>                   
                </div>
                <div className='demo-container'>
                    <div className='demo-content'>




                        <p className='demo-subtitle'>书写研究题目，<span className='p-en'>Onion</span> 向导</p>
                        <p className='demo-text'>建立研究的“假说”，结构良好的假说是研究题目的基础，<span className='bold-text p-en'>Onion</span> 辅助研究者进行。</p>
                        <p className='demo-text'>规范的研究题目应该符合“<span className='bold-text p-en'>PICOST</span>”，<span className='bold-text p-en'>Onion</span> 解释给研究者，向导研究者确定规范的“题目”</p>
                    </div>
                    <div className='demo-img'>
                        <img src={demo_img3} alt='demo-img3'/>
                    </div>
                </div>
                <div className='demo-container'>
                    <div className='grid-img4'>
                        <img src={demo_img4} alt='demo-img4'/>
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>交互提示</p>
                        <p className='demo-text'>界面交互，用户在交互存在不易理解时，可根据<span className='bold-text p-en'>Onion</span> 的提示，轻松完成交互……</p>
                        <p className='demo-text'><span className='bold-text p-en'>Onion</span> 理解研究者的研究的具体情境，根据情况辅助决策研究适合的“研究类型”</p>
                        <p className='demo-text'><span className='bold-text p-en'>RCT</span>？<span className='bold-text p-en'>Cohort study</span>？还是 <span className='bold-text p-en'>Case-controled study</span>？</p>
                        <p className='demo-text'>辅助决策适合的研究类型、研究设计</p>
                    </div>                   
                </div>
                <div className='demo-container'>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>采用什么研究类型？<span className='p-en'>Onion</span> 辅助研究者轻松决策</p>
                        <p className='demo-text'>界面交互，<span className='bold-text p-en'>Onion</span> 理解研究者的研究的具体情境，根据情况辅助决策研究适合的“研究类型”。</p>
                        <p className='demo-text'><span className='bold-text p-en'>RCT</span>？<span className='bold-text p-en'>Cohort study</span>？还是 <span className='bold-text p-en'>Case-controled study</span>？……</p>
                        <br/>
                        <br/>
                        <br/>
                    </div> 
                    <div className='demo-large-img'>
                        <img src={demo_img5} alt='demo-img5'/>
                    </div>
                                      
                </div>
                <div className='vertical-container'>
                    <div className='grid-img'>
                        <img src={demo_img6} alt='demo-img5'/>
                    </div>
                    <div className='vertical-content'>
                        <p className='demo-subtitle'>确定研究“技术路径”（<span className='p-en'>Path</span>）</p>


                        <p className='demo-text'><span className='bold-text p-en'>Onion</span> 发出提示，让研究者自由选择研究技术路径（<span className='bold-text p-en'>path</span>）</p>
                    </div>
                        
                </div>


                <div className='demo-container'>
                    <div className='grid-img'>
                        <img src={demo_img7} alt='demo-img7'/>
                    </div>
                    <div className='demo-content'>
                        <p className='demo-subtitle'><span className='p-en'>AI</span> 辅助，形成研究的关键框架（<span className='p-en'>Framework</span>）：</p>


                        <p className='demo-text'><span className='bold-text p-en'>Onion</span>的<span className='bold-text p-en'>AI</span>算法，根据用户交互的信息，一键式生成了研究“<span className='bold-text p-en'>Framework</span>”（关键框架），在这个“<span className='bold-text p-en'>Framework</span>”里面包括了研究非常关键的、也是经常困扰临床研究者的问题之解决方案，包括：</p>
                        <p className='demo-text'>如何假设、研究设计、是否“巢氏”、“如何随机”、“样本量估计方法”、“统计学分析方法”、“变量处理”、“偏倚控制策略”、“敏感性分析”、“亚组分析”……</p>
                    </div>
                    
                </div>
                <div className='demo-container'>
                    <div className='demo-content'>
                        <p className='demo-subtitle'>研究方案 & 报告，<span className='p-en'>Onion</span> 向导下轻松撰写</p>
                        <p className='demo-text'>规范的研究方案“模版”，针对每个模块 <span className='bold-text p-en'>Onion</span> 都发出提示，研究者只需跟随 <span className='bold-text p-en'>Onion</span> 的向导即可高效的完成一份研究方案 & 报告；</p>
                        <p className='demo-text'>质量有保证的方案、考虑全面的方案……</p>
                        <p className='demo-text'>以研究方案规范形式呈现给研究者，事倍功半！</p>
                    </div>
                    <div className='demo-img demo-large-img'>
                        <img src={demo_img8} alt='demo-img8'/>
                    </div>
                </div>
                
                
                <div className='demo-container'>
                    <div className='demo-content'>
                        <button className="data-button">
                            <a href='http://www.artdatabanks.com/v3/#/login'>
                                <span >Log in artdataing <sup id='copy-right'>TM</sup></span>
                            </a>
                        </button>
                        <p className='demo-subtitle'>数据处理，预分析</p>
                        <p className='demo-text'>研究者研究数据一键式输入，即可在 <span className='bold-text p-en'>artdataing ™ </span></p>
                        <p className='demo-text'>（多功能的<span className='bold-text p-en'>EDC</span>）中进行研究的分组、生成派生指标、统计学预分析、偏倚控制……</p>
                    </div>
                    <div className='demo-sticker'>
                        <img src={demo_img9} alt='demo-img8'/>
                    </div>
                </div>
                <div className='demo-space'></div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Demo_Page);