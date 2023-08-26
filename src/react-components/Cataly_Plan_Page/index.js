import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import plan_img from '../../content-img/plan-img.png'
import cataly_plan_img1 from '../../content-img/cataly-img1.png'
import cataly_plan_img2 from '../../content-img/cataly-img2.png'
import cataly_plan_img3 from '../../content-img/cataly-img3.png'
import cataly_plan_img4 from '../../content-img/cataly-img4.png'
import cataly_plan_table1 from '../../content-img/cataly-plan-table1.png'


class Cataly_Plan_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <div className='cataly-plan-intro'>
                    <p className='cataly-plan-intro-title'><span className='p-en bold-text'>Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly — </span>医院管理循证研究浸入式体验</p>
                    <p className='cataly-plan-intro-subtitle'> <span className='p-en bold-text'>Hospital administrator‘s idea + Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly = a research protocol</span></p>
                </div>
                <div className='cataly-plan-section-title'>
                    <div className='gradient-border'></div>
                    <p className='cataly-plan-section-text bold-text'>另辟蹊径 – 在“医管循证研究”领域展开互动， 成为行业创新！</p>
                </div>
                <div className='cataly-plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-wide-img'>
                            <img src={cataly_plan_img1} alt='cataly_plan_img1'/>
                        </div>
                        <div className='portal-content' id='move-up'> 
                            <br/>
                            <br/>
                            <p className='portal-text'>“医院管理领域”也可以进行循证研究！医院管理领域的管理措施、医疗模式的采用、甚至一个医疗服务的微小改进都可以进行循证研究，也应该通过循证研究来给予证实。</p>
                            <p className='portal-text'> 医疗绩效的改进必须运用“循证方法”；医疗管理决策也应建立在“循证方法”的基础上。</p>
                            <p className='portal-text double-space'> — 这是现代医疗管理与过去医疗管理之间的根本区别。</p>
                            <br/>
                            <p className='portal-text pink-text'> “关注医院管理者的需求，需要改变 <span className='p-en bold-text'>Key Account Management</span> 的知识结构、能力模型、以及互动方式！”</p>
                            <p className='portal-text double-tab-space pink-text'> — <span className='p-en bold-text'> Healthcare companies KA </span> 部门的共同挑战。</p>
                        </div>
                    </div>
                </div>
                <div className='cataly-plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-img'>
                            <img src={cataly_plan_img2} alt='module1-phase1'/>
                        </div>
                        <div className='portal-content' id='move-up'> 
                            <p className='portal-subtitle tab-space'><span className='p-en bold-text'>Onion Cataly</span>  研究体验 ---专题研讨</p>
                            <p className='portal-text tab-space' id='wider'> 医院管理领域的循证研究在很多时候属于“真实世界研究” ( <span className='bold-text p-en'>Real World Study</span> ) 范畴。在研究设计、统计分析方面有不少“关键点”（ <span className='bold-text p-en'>Key Point</span> ），医管循证的发展需要在 “<span>Key point</span>” 上着重考虑。</p>
                            <p className='portal-text tab-space' id='wider'> 鉴于此，<span className='p-en bold-text'>Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly</span> 的专家们，将这些“ <span className='p-en bold-text'>Key point</span> ”整理、形成几个专题。</p>
                            <p className='portal-text tab-space' id='wider'> 您可以选择下面列表中的1~2个专题，组织一次 “<span className='p-en bold-text'>Onion Cataly</span> 专题研讨”</p>
                            <p className='portal-text tab-space' id='wider'> <span className='p-en bold-text'>Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly</span> 的专家们可以和研究者们就这些专题进行深入的研讨、交流，进而助力研究者。</p>
                            <br/>
                            <p className='portal-text double-space' id='wider'>适合的听众 : 有意将自己的医管想法、实践以及经验，通过研究形成“循证证据”的医疗管理者或研究者。</p>
                            <p className='portal-text double-space' id='wider'>时间：2 ~ 4小时</p>
                        </div>
                    </div>

                </div>
                <div className='plan-block1'>
                    <p className='plan-text'>Onion Cataly 专题研讨</p>
                </div>
                <div className='cataly-plan-container'>
                    <img src={cataly_plan_table1} alt='cataly_plan_table1'></img>
                </div>

                <div className='grid-container'>
                        
                    <div className='portal-content'> 
                        <p className='portal-subtitle'><span className='p-en bold-text'>Onion Cataly</span>  体验</p>
                        <p className='portal-text'> 研究者的医管措施的想法（<span className='bold-text p-en'>Idea</span>），要将其形成一个规范的研究题目，或是撰写成一份高质量的“医管研究方案”，这并非易事！</p>
                        <p className='portal-text'> 比如，一些“关键变量的处理”、“偏倚的识别与控制”、“应采用的统计分析”……，都是研究者常常面临的 “<span className='bold-text p-en'>Key point</span> ”。</p>
                        <p className='portal-text'> <span className='p-en bold-text'>Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly</span> 可以帮助研究者的 <span className='p-en bold-text'>Idea</span> 在 <span className='p-en bold-text'>AI</span> 系统 中进行“研究方案设计的浸入式体验”。可以帮助研究者在体验/交互过程中了解相关研究知识、模拟研究方案写作，最终，模拟过程使研究者获得一份高质量的“研究方案”（ <span className='p-en bold-text'>Research protocol</span> ）。</p>
                        <p className='portal-text'> 您可以将“<span className='p-en bold-text'>Onion</span> 研究体验”选入 “<span className='p-en bold-text'>Onion</span> 专题研讨会”中作为会议的一个模块， <span className='p-en bold-text'>Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly</span> 的专家们与您共同完成此过程。</p>
                        <p className='portal-text'> 我们称其为“<span className='bold-text p-en'> Onion Cataly  </span>体验”！</p>
                        <br/>
                    </div>
                    <div className='grid-img'>
                        <img src={cataly_plan_img3} alt='plan-img2'/>
                        <p className='portal-text double-space' id='wider'>适合的听众 : 有意将自己的医管想法、实践以及经验，通过研究形成“循证证据”的医疗管理者或研究者。</p>
                        <p className='portal-text double-space' id='wider'>有意将自己的“研究 <span className='p-en bold-text'>Idea</span>” 与 <span className='p-en bold-text'>Onion ResearchAI</span><sup className='copy-right'>®</sup> <span className='p-en bold-text'>| Cataly</span> 进行信息交互，模拟撰写、最终获得一份研究方案的研究者。</p>
                        <p className='portal-text double-space' id='wider'>时间：3 ~ 4小时</p>
                    </div>
                </div>

                <div className='cataly-plan-schedule'>
                    {/* <img src={cataly_plan_schedule} alt='cataly_plan_schdule'></img> */}
                </div>
                <div className='cataly-plan-section-title'>
                    <div className='gradient-border'></div>
                    <p className='cataly-plan-section-text bold-text'><span className='p-en'> Continue ...</span> </p>
                </div>
                <div className='cataly-plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-img'>
                            <img src={cataly_plan_img4} alt='cataly_plan_img1'/>
                        </div>
                        <div className='portal-content'> 
                            
                        </div>
                    </div>
                </div>
                
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Cataly_Plan_Page);