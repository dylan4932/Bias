import React from 'react';
import './index.css';
import { withRouter } from 'react-router'; 
import cataly_experience_plan_img1 from '../../../content-img/cataly-experience-img1.png'
import cataly_experience_plan_img2 from '../../../content-img/cataly-experience-img2.jpg'
import cataly_experience_plan_img3 from '../../../content-img/cataly-experience-img3.png'
import cataly_experience_plan_img4 from '../../../content-img/cataly-experience-img4.png'
import cataly_experience_plan_img5 from '../../../content-img/cataly-experience-img5.png'
import cataly_experience_plan_img6 from '../../../content-img/cataly-experience-img6.jpg'
import cataly_experience_plan_table1 from '../../../content-img/cataly-experience-plan-table1.png'
import cataly_experience_plan_table2 from '../../../content-img/cataly-experience-plan-table2.png'
import cataly_onion_icon from '../../../content-img/cataly-onion-icon.png'

class CatalyExperienceContent extends React.Component {
    
    render(){
        return (
            <div className='cataly-content'>
                <div className='cataly-plan-section-title' id='move-down'>
                    <div className='gradient-border'></div>
                    <p className='cataly-plan-section-text bold-text'>另辟蹊径 – 在“医管循证研究”领域展开互动， 成为行业创新！ </p>
                </div>
                <div className='cataly-plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-wide-img'>
                            <img src={cataly_experience_plan_img1} alt='cataly_experience_plan_img1'/>
                        </div>
                        <div className='portal-content'> 
                            <p className='portal-text' id='wider'>“医院管理领域”也可以进行循证研究！医院管理领域的管理措施、医疗模式的采用、甚至一个医疗服务的微小改进都可以进行循证研究，也应该通过循证研究来给予证实。</p>
                            <p className='portal-text' id='wider'>医疗绩效的改进必须运用“循证方法”；医疗管理决策也应建立在“循证方法”的基础上。</p>
                            <p className='portal-text double-space'> — 这是现代医疗管理与过去医疗管理之间的根本区别。</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p className='portal-text' id='wider'>“关注医院管理者的需求，需要改变 <span className='p-en bold-text'>Key Account Management</span> 的知识结构、能力模型、以及互动方式！“</p>
                            <p className='portal-text double-tab-space'> — <span className='p-en bold-text'> Healthcare companies KA </span> 部门的共同挑战。</p>
                        </div>
                    </div>
                </div>
                <div className='cataly-plan-grid' id='move-down'>
                    <div className='grid-container'>
                        <div className='portal-content' id='move-up'> 
                            <p className='portal-subtitle'><span className='p-en'>Onion | Cataly</span> 医管循证研究 专题研讨</p>
                            <p className='portal-text' id='wider'> 医院管理领域的循证研究在很多时候属于“真实世界研究”（<span className='p-en bold-text'>Real World Study</span>）范畴。在研究设计、统计分析方面有不少“关键点”（<span className='p-en bold-text'>Key point</span>），医管循证的发展需要在“<span className='p-en bold-text'>Key point</span>”上着重考虑。</p>
                            <p className='portal-text' id='wider'> 在 <span className='p-en bold-text'>Onion | Cataly</span> 医管循证研究 专题研讨中，研究者有机会将其管理经验、措施通过与 <span className='p-en bold-text'>Onion | Cataly AI</span> 系统的交互产生一份循证研究的方案，这是一种有意思的体验。助力研究者的管理经验转化成“循证证据”。</p>
                            <p className='portal-text' id='wider'> 未来的管理决策都将以“循证证据”作为基础，这是科学管理的方向。</p>
                        </div>
                        <div className='grid-img'>
                            <img src={cataly_experience_plan_img2} alt='cataly_experience_plan_img2'/>
                        </div>
                    </div>
                </div>
                <div className='cataly-plan-block1'>
                    <p className='plan-text'> <span className='p-en'>Onion Cataly</span> 专题研讨</p>
                </div>
                <div className='cataly-plan-container'>
                    <img src={cataly_experience_plan_table1} alt='cataly_experience_plan_table1'></img>
                    <br/>
                    <br/>
                    <br/>
                    <p className='portal-text'>适合的听众；</p>
                    <p className='portal-text'>对真实世界研究或临床试验感兴趣、想利用自己既有数据进行临床研究的医生或研究者。</p>
                    <p className='portal-text'>时间：</p>
                    <p className='portal-text'>3~4小时 （0.5天）or 6~8 小时（1天）</p>

                </div>

                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={cataly_experience_plan_img3} alt='experience_plan_img3'/>
                    </div>
                    <div className='portal-content'> 
                        <p className='portal-subtitle'><span className='p-en'>Onion Cataly </span> 医管循证研究</p>
                        <p className='portal-subtitle'>专题研讨 <span className='p-en'>Part 1</span> :做个观众</p>
                        <br />
                        <p className='portal-text'> <span className='p-en bold-text'>Dr. Art</span> 是一位医院管理者，想进行高质量的临床研究，但是 <span className='p-en bold-text'>Art</span> 医生并没有很清晰的主题，对临床研究的设计也不是特别熟悉。不过 <span className='p-en bold-text'>Art</span> 医生结合 <span className='p-en bold-text'>Onion Cataly</span> 系统轻松的完成了研究。</p>
                        <p className='portal-text'> 会议参与者作为观众的角度体验 <span className='p-en bold-text'>Dr. Art </span> 研究的全过程。</p>
                        <br/>
                    </div>
                    
                </div>
                < br/>
                < br/>
                < br/>
                <div className='grid-container'>
                    <div className='portal-content' id='move-down'> 
                        <p className='portal-subtitle'><span className='p-en bold-text'>Onion Cataly</span> 医管循证研究 </p>
                        <p className='portal-subtitle'>专题研究 <span className='p-en bold-text'>Part 2</span> :做个研究者</p>
                        <br />
                        <p className='portal-text'> 研究者的医管措施的想法（<span className='p-en bold-text'>Idea</span>），要将其形成一个规范的研究题目，或是撰写成一份高质量的“医管研究方案”，这并非易事！</p>
                        <p className='portal-text'> 比如，一些“关键变量的处理”、“偏倚的识别与控制”、“应采用的统计分析”……，都是研究者常常面临的 “<span className='p-en bold-text'>Key point</span>”。</p>
                        <p className='portal-text'> <span className='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup> | Cataly</span> 可以帮助研究者的 <span className='p-en bold-text'>idea</span> 在 <span className='p-en bold-text'>AI</span> 系统 中进行“研究方案设计的浸入式体验”。可以帮助研究者在体验/交互过程中了解相关研究知识、模拟研究方案写作，最终，模拟过程使研究者获得一份高质量的“研究方案”（<span className='p-en bold-text'>Research protocol</span>）。</p>
                        <p className='portal-text'> 您可以将“Onion 研究体验”选入 “<span className='p-en bold-text'>Onion</span> 专题研讨会”中作为会议的一个模块， <span className='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup> | Cataly</span> 的专家们与您共同完成此过程。</p>
                        <p className='portal-text'> 我们称其为“<span className='p-en bold-text'>Onion Cataly</span> 体验”！</p>
                        <br/>
                    </div>
                    <div className='grid-img'>
                        <img src={cataly_experience_plan_img4} alt='cataly_experience_plan_img4'/>
                    </div>
                </div>
                < br/>
                < br/>
                < br/>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={cataly_experience_plan_img5} alt='cataly_experience_plan_img5'/>
                    </div>
                    <div className='portal-content'> 
                        <p className='portal-subtitle'><span className='p-en bold-text'>Onion Cataly</span> 医管循证研究 </p>
                        <p className='portal-subtitle'>专题研究 <span className='p-en bold-text'>Part 3</span> :做个同行评议者</p>
                        <br />
                        <p className='portal-text'> 以会议参与者以“自身的研究 <span className='p-en'>idea</span>” 生成的方案，进一步体验研究方案实施的“<span className='p-en'>Key points</span>”，并且了解背后的知识。为研究真正实施建立基础。</p>
                        <p className='portal-text'> 在研究的实践中有不少问题使研究者们感到困惑，而针对这些具体问题作专题讨论的场合并不多见。鉴于此，<span classNme='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup></span> 的专家们，将这些“<span className='p-en'>Difficult point</span>”整理、形成多个专题。结合<span className='p-en'>Onion | Cataly</span> 体验的过程，选择下面列表中的1~2个专题展开，从“同行评议”的角度进行研究设计 & 统计分析的探讨。</p>
                        <br/>
                    </div>
                </div>
                < br/>
                < br/>
                < br/>

                <div className='cataly-plan-section-title'>
                    <div className='gradient-border'></div>
                    <p className='cataly-plan-section-text bold-text'><span className='p-en bold-text'> Onion Cataly</span> 专题研讨 </p>
                </div>
                <div className='cataly-plan-container'>
                    <img src={cataly_experience_plan_table2} alt='experience_plan_table2'></img>
                </div>

                <div className='cataly-plan-schedule'>
                    <div className='cataly-plan-schedule-img-title'>
                        <img src={cataly_onion_icon} alt='cataly_onion_icon'></img>
                        <p className='portal-medium-text'> <span className='p-en bold-text'>Onion Cataly</span> 专题研讨” & “ <span className='p-en bold-text'>Onion Cataly</span> 研究体验” </p>
                    </div>
                    <div className='cataly-plan-schedule-table'>
                        <div className='cataly-plan-schedule-col'>
                            <div className='cataly-plan-schedule-col-title'>
                                <p className='portal-medium-text'>会前准备</p>
                            </div>
                            <div className='cataly-plan-schedule-col-content'>
                                <p className='portal-text purple-text bolder cataly-center-text'>共识</p>
                                <ul>
                                    <li>
                                        <p className='portal-text'>共识研讨专题</p>
                                    </li>
                                    <li>
                                        <p className='portal-text'>对齐客户 <span className='p-en bold-text'>&</span> 公司的学术诉求</p>
                                    </li>
                                    <li>
                                        <p className='portal-text'>拟定 <span className='p-en bold-text'>Agenda &</span> 邀请参与的 <span className='p-en bold-text'>KOL</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='cataly-plan-schedule-col'>
                            <div className='cataly-plan-schedule-col-title'>
                                <p className='portal-medium-text'>会中 研讨 & 体验</p>
                            </div>
                            <div className='cataly-plan-schedule-col-content'>
                                <div className='cataly-plan-schedule-col-content-left'>
                                    <p className='portal-text green-text bolder cataly-center-text'><span className='p-en bold-text'>Onion Cataly</span> 专题研讨</p>
                                    <ul>
                                        <li>
                                            <p className='portal-text'>研究中“<span className='p-en bold-text'>Key point</span>” 研讨，医疗管理者在研究设计上获得收获。  </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <p className='portal-text green-text bolder cataly-center-text'> <span className='p-en bold-text'>Onion Cataly</span> 体验 — 激发研究灵感</p>
                                    <ul>
                                        <li>
                                            <p className='portal-text'> 医疗管理者将自己的研究  <span className='p-en bold-text'>Idea</span> 与 <span className='p-en bold-text'>Onion RsearchAI<sup className='copy-right'> ®</sup> | Cataly</span> 信息交互；</p>
                                        </li>
                                        <li>
                                            <p className='portal-text'> <span className='p-en bold-text'>Onion RsearchAI<sup className='copy-right'> ®</sup> | Cataly</span> 引导可行的研究方向；</p>
                                        </li>
                                        <li>
                                            <p className='portal-text'> <span className='p-en bold-text'>Onion RsearchAI<sup className='copy-right'> ®</sup> | Cataly</span>  激发研究灵感</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='cataly-plan-schedule-col-content-right'>
                                    <div>
                                        <p className='portal-text green-text bolder cataly-center-text'><span className='p-en bold-text'>Onion Cataly</span> 体验—明确研究情境</p>
                                        <ul>
                                            <li>
                                                <p className='portal-text'> 医疗管理者将自己的研究 <span className='p-en bold-text'>Idea</span> 与 <span className='p-en bold-text'>Onion RsearchAI<sup className='copy-right'> ®</sup> | Cataly</span> 进行信息交互；</p>
                                            </li>
                                            <li>
                                                <p className='portal-text'> <span className='p-en bold-text'>KOL</span> & 员工共同探索 </p>
                                            </li>
                                            <li>
                                                <p className='portal-text'> <span className='p-en bold-text'>Onion RsearchAI<sup className='copy-right'> ®</sup> | Cataly</span> 进行研究情境分析。 </p>
                                            </li>
                                        </ul>
                                        <br/>
                                        <p className='portal-text green-text bolder cataly-center-text'><span className='p-en bold-text'>Onion Cataly</span> 体验—形成研究的关键框架</p>
                                        <ul>
                                            <li>
                                                <p className='portal-text'> <span className='p-en bold-text'>Onion RsearchAI<sup className='copy-right'> ®</sup> | Cataly</span> 的 <span className='p-en bold-text'>AI</span> 算法，提供关键问题的决策</p>
                                            </li>
                                            <li>
                                                <p className='portal-text'> 一键式生成研究设计的“ <span className='p-en bold-text'>Framework</span> ”（关键框架） </p>
                                            </li>
                                            <li>
                                                <p className='portal-text'>获得研究方案最核心内容！ </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cataly-plan-schedule-col'>
                            <div className='cataly-plan-schedule-col-title'>
                                <p className='portal-medium-text'>会后 研究辅助</p>
                            </div>
                            <div className='cataly-plan-schedule-col-content'>
                                <p className='portal-text grey-text bolder cataly-center-text'>跟进</p>
                                <ul>
                                    <li>
                                        <p className='portal-text'> 研究的设计、数据库服务、统计分析、</p>
                                    </li>
                                    <li>
                                        <p className='portal-text'> 跟进医疗管理者活动反馈 </p>
                                    </li>
                                    <li>
                                        <p className='portal-text'> 跟进公司学术形象 </p>
                                    </li>
                                    <li>
                                        <p className='portal-text'> 跟进产品“使用情境” </p>
                                    </li>
                                    <li>
                                        <p className='portal-text'> 跟进后续活动 </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='cataly-plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-wide-img'>
                            <img src={cataly_experience_plan_img6} alt='cataly_experience_plan_img6'/>
                        </div>
                        <div className='portal-content'> 
                            <p className='portal-medium-text' id='wider'>我似乎能够感觉到行业营销模式的“创新火种”就在我身边，我想我可以找到它……</p>
                            <ul className='back-space'>
                                <li>
                                    <p className='portal-text'> Healthcare company 与 临床 KOL & 医院管理者 新的学术互动形式、新的合作模式！</p>
                                </li>
                                <li>
                                    <p className='portal-text'> 使 Healthcare company 的人员成为临床研究 & 医院管理者的咨询专家，成为学术 & 战略合作伙伴！ </p>
                                </li>
                                <li>
                                    <p className='portal-text'> 使 Healthcare company 成为业界创新领先！ </p>
                                </li>
                            </ul>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p className='portal-medium-text cataly-ending-text'>Onion Experience Meeting  &  Onion | Cataly 助力合作，深耕 “学术合作” & “医疗管理循证” 领域！</p>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default withRouter(CatalyExperienceContent);