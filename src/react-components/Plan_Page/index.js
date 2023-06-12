import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import plan_img from '../../content-img/plan-img.png'
import plan_img1 from '../../content-img/plan-img1.png'
import plan_img2 from '../../content-img/plan-img2.png'
import plan_table1 from '../../content-img/plan-table1.png'
import plan_table2 from '../../content-img/plan-table2.png'


class Plan_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <div className='plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-img'>
                            <img src={plan_img1} alt='module1-phase1'/>
                        </div>
                        <div className='portal-content' id='move-up'> 
                            <p className='portal-subtitle tab-space'><span className='p-en'>Onion</span> 研究专题研讨会</p>
                            <p className='portal-text tab-space' id='wider'> 在与“临床研究者”大量的沟通、交流中发现：在研究的实践中有不少问题使研究者们感到困惑，而针对这些具体问题作专题讨论的场合并不多见。研究者们在这些“<span className='bold-text p-en'>Difficult point</span>” 问题上，[ 尤其是“真实世界研究”（<span className='bold-text p-en'>Real World Study</span>）领域的一些问题 ]需要帮助。</p>
                            <p className='portal-text tab-space' id='wider'> 鉴于此，<span className='bold-text p-en'>BJHPA | Research Design Group</span> 的专家们，将这些“<span className='bold-text p-en'>Difficult point</span>”问题汇总、整理、形成多个专题。</p>
                            <p className='portal-text tab-space' id='wider'> 您可以选择下面列表中的1~2个专题，组织一次 “<span className='bold-text p-en'>Onion 专题研讨会</span>”。</p>
                            <p className='portal-text tab-space' id='wider'> <span className='bold-text p-en'>BJHPA | Research Design Group</span> 的专家们可以和研究者们就这些被选择的专题进行深入的研讨、交流，进而助力您的研究方案。</p>
                            <br/>
                            <p className='portal-text double-space' id='wider'>适合的听众 : 对真实世界研究或临床试验感兴趣、想利用自己既有数据进行临床研究的医生或研究者。</p>
                            <p className='portal-text double-space' id='wider'>时间：2 ~ 4小时</p>
                        </div>
                    </div>

                </div>
                <div className='plan-block1'>
                    <p className='plan-text'>研讨专题目录</p>
                </div>
                <div className='plan-container'>
                    <img src={plan_table1} alt='plan-table1'></img>
                </div>
                
                <div className='plan-container'>
                    <img src={plan_table2} alt='plan-table2'></img>
                </div>
                <div className='grid-container'>
                        
                        <div className='portal-content'> 
                            <p className='portal-subtitle'><span className='p-en'>Onion</span> 研究方案模拟</p>
                            <p className='portal-text'> 研究者产生了一个研究创想（<span className='bold-text p-en'>Idea</span>），要将其形成一个规范的研究题目，或是撰写成一份高质量的“研究方案”，这并非易事！</p>
                            <p className='portal-text'> 比如，我们在与临床研究者的交流中就发现“真实世界研究的 ‘一些关键变量’ 的处理、‘ 偏倚的识别与控制’……”，都是研究者常常面临的 “<span className='bold-text p-en'>Difficult point</span> ”。</p>
                            <p className='portal-text'> <span className='bold-text p-en'>Onion</span> 的 <span className='bold-text p-en'>AI</span> 决策功能可以帮助研究者，研究者的创想和情景可以在 <span className='bold-text p-en'>Onion</span> 中进行“<span className='bolder'>研究方案模拟</span>”。可以帮助研究者在过程中了解相关研究知识、模拟研究方案写作，最终，模拟过程使研究者获得一份高质量的<span className='bolder'>研究方案</span><span className='bold-text p-en'>（Research protocol）</span>。</p>
                            <p className='portal-text'> 您可以将“<span className='bold-text p-en'>Onion</span> 研究方案模拟”选入 “<span className='bold-text p-en'>Onion</span> 专题研讨会”中作为会议的一个模块，并由<span className='bold-text p-en'> BJHPA | Research Design Group</span> 的专家们引导您完成此过程。</p>
                            <p className='portal-text'> 我们称其为“<span className='bold-text p-en'> Onion </span> <span className='bolder'>研究方案模拟</span>”！</p>
                            <br/>
                        </div>
                        <div className='grid-img'>
                            <img src={plan_img2} alt='plan-img2'/>
                            <p className='portal-text double-space' id='wider'>适合的听众 : 对真实世界研究或临床试验感兴趣、想利用自己既有数据进行临床研究的医生或研究者。</p>
                            <p className='portal-text double-space' id='wider'>时间：2 ~ 4小时</p>
                        </div>
                    </div>
                
                <div className='main-plan-container'>
                    <p className='plan-text'><span className='p-en'>Onion</span> 还可以包括组合服务，包含：</p>
                    <img src={plan_img} alt='main-plan-img'></img>
                    
                </div>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Plan_Page);