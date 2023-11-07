import React from 'react';
import './index.css';
import { withRouter } from 'react-router'; 
import experience_plan_img1 from '../../../content-img/experience-img1.jpg'
import experience_plan_img2 from '../../../content-img/experience-img2.jpg'
import experience_plan_img3 from '../../../content-img/experience-img3.png'
import experience_plan_img4 from '../../../content-img/experience-img4.png'
import experience_plan_img5 from '../../../content-img/experience-img5.png'
import experience_plan_img6 from '../../../content-img/experience-img6.png'
import experience_plan_table1 from '../../../content-img/experience-plan-table1.png'
import experience_plan_table2 from '../../../content-img/experience-plan-table2.png'
import experience_plan_table3 from '../../../content-img/experience-plan-table3.png'
import cataly_onion_icon from '../../../content-img/cataly-onion-icon.png'

class ExperienceContent extends React.Component {
    
    render(){
        return (
            <div className='cataly-content'>
                <div className='cataly-plan-grid' id='move-down'>
                    <div className='grid-container'>
                        <div className='grid-wide-img'>
                            <img src={experience_plan_img1} alt='experience_plan_img1'/>
                        </div>
                        <div className='portal-content'> 
                            <p className='portal-text' id='wider'>“我们不能只是听别人的信息！我们需要根据自身的临床体验，进行自己的研究，形成循证，自我建立诊疗观念！</p>
                            <p className='portal-text double-space'> — 这才是现下 <span className='p-en bold-text'>KOL</span> & 临床专家的愿望。</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p className='portal-text' id='wider'>“深耕学术沟通，持续专业合作，让我们的人力和市场资源更高效！“</p>
                            <p className='portal-text double-tab-space'> — <span className='p-en bold-text'> Healthcare companies KA </span> 部门的共同挑战。</p>
                        </div>
                    </div>
                </div>
                <div className='cataly-plan-grid'>
                    <div className='grid-container'>
                        <div className='portal-content' id='move-up'> 
                            <p className='portal-text' id='wider'> “近来，我们做了一些新的尝试。</p>
                            <p className='portal-text' id='wider'> 我们和一家专门从事医疗研究领域的 <span className='p-en bold-text'>RDG</span> 小组一同探讨了一种新型的学术研讨会。“</p>
                            <p className='portal-text' id='wider'> 您可以选择下面列表中的1~2个专题，组织一次 “<span className='p-en bold-text'>Onion Cataly</span> 专题研讨”</p>
                            <p className='portal-text double-space' id='wider'> — “<span className='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup></span> -浸入式体验临床研究”</p>
                            <br/>
                            <p className='portal-text' id='wider'>看着专家们卓有收获的样子，一些想法跃入脑海：“<span className='p-en bold-text'>Onion</span> 体验”！临床专家的研究想法在 <span className='p-en bold-text'>Onion AI</span> 系统中得到了亲身的体验，研究想法得到了针对性建议、不容易的研究方案可以迅速的形成。</p>
                            <p className='portal-text' id='wider'>这使我们和医生的对话更专业更深入；</p>
                            <p className='portal-text' id='wider'>辅助做好临床研究，是 KOLs 和专家们显而易见的兴趣和需求</p>
                            <p className='portal-text' id='wider'>Onion 体验覆盖专家的效率很高，质量有保证。</p>
                            <p className='portal-text double-space' id='wider'>- <span className='p-en bold-text'>Anagha</span>：<span className='p-en bold-text'>a Marketing Director</span></p>
                        </div>
                        <div className='grid-img'>
                            <img src={experience_plan_img2} alt='experience_plan_img2'/>
                        </div>
                    </div>

                </div>
                <div className='cataly-plan-block1'>
                    <p className='plan-text'> <span className='p-en'>Onion Cataly</span> 专题研讨</p>
                </div>
                <div className='cataly-plan-container'>
                    <img src={experience_plan_table1} alt='experience_plan_table1'></img>
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
                        <img src={experience_plan_img3} alt='experience_plan_img3'/>
                    </div>
                    <div className='portal-content'> 
                        <p className='portal-subtitle'><span className='p-en bold-text'>Onion Experience Part 1</span>  :</p>
                        <p className='portal-subtitle'><span className='p-en'>Art</span> 医生的研究</p>
                        <p className='portal-text'> <span className='p-en bold-text'>Art</span>  医生是一位 “辅助生殖”领域的医生，想进行高质量的临床研究，但是 <span className='p-en bold-text'>Art</span> 医生并没有很清晰的主题，对临床研究的设计也不是特别熟悉。不过 <span className='p-en bold-text'>Art</span> 医生结合 <span className='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup></span> 系统轻松的完成列研究。</p>
                        
                        <p className='portal-text'> 会议参与者作为观众的角度体验 <span className='p-en bold-text'>Art</span> 医生研究的全过程。</p>
                        <br/>
                    </div>
                    
                </div>
                < br/>
                < br/>
                < br/>
                <div className='grid-container'>
                    <div className='portal-content' id='move-down'> 
                        <p className='portal-subtitle'><span className='p-en bold-text'>Onion Experience Part 2</span>  :</p>
                        <p className='portal-subtitle'>参与者体验自己的 <span className='p-en'>idea</span> </p>
                        <p className='portal-text'>会议参与者以“自身的研究 <span className='p-en bold-text'>idea</span>” 与 <span classNme='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup></span> 系统进行信息交互，使 <span className='p-en bold-text'>Onion</span> 了解参与者研究 <span className='p-en bold-text'>idea</span> 及研究情境，而 <span className='p-en bold-text'>Onion</span> 既可以根据具体情境给出 <span className='p-en bold-text'>AI</span> 决策的“研究方案”。</p>
                        
                        <p className='portal-text'> 会议参与者亲身体验自身的 <span className='p-en bold-text'>idea</span> 可以生成怎样的方案；及研究中的关键点。</p>
                        <br/>
                    </div>
                    <div className='grid-img'>
                        <img src={experience_plan_img4} alt='experience_plan_img4'/>
                    </div>
                </div>
                < br/>
                < br/>
                < br/>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={experience_plan_img5} alt='experience_plan_img5'/>
                    </div>
                    <div className='portal-content' id='move-down'> 
                        <p className='portal-subtitle'><span className='p-en bold-text'>Onion Experience Part 3</span>  :</p>
                        <p className='portal-subtitle'>参与者研究方案 <span className='p-en'>Key points</span> 回顾</p>
                        <p className='portal-text'>以会议参与者以“自身的研究 <span className='p-en'>idea</span>” 生成的方案，进一步体验研究方案实施的“<span className='p-en'>Key points</span>”，并且了解背后的知识。为研究真正实施建立基础。</p>
                        
                        <p className='portal-text'> 参与者以研究者的视角体验研究实施及文献撰写的过程。</p>
                        <br/>
                    </div>
                </div>
                < br/>
                < br/>
                < br/>
                <div className='grid-container'>
                    <div className='portal-content'> 
                        <br/>
                        <br/>
                        <p className='portal-subtitle'><span className='p-en bold-text'>Onion Experience Part 4</span>  :</p>
                        <p className='portal-subtitle'><span className='p-en'>Key points</span> 回顾可结合的专题 </p>
                        <p className='portal-text'> 在研究的实践中有不少问题使研究者们感到困惑，而针对这些具体问题作专题讨论的场合并不多见。研究者们在这些“<span className='p-en'>Difficult point</span>” 问题上，[ 尤其是“真实世界研究”（ <span className='p-en'>Real World Study</span> ）领域的一些问题 ]需要探讨。</p>
                        
                        <p className='portal-text'> 鉴于此，<span classNme='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup></span> 的专家们，将这些“<span className='p-en'>Difficult point</span>”整理、形成多个专题。可以选择下面列表中的1~2个专题，结合<span className='p-en'>Onion Experience</span> 的过程进行探讨。</p>
                        <p className='portal-text'> <span classNme='p-en bold-text'>Onion RsearchAI<sup id='copy-right'> ®</sup></span> 的专家们可以和与会者就这些专题进行深入的研讨、交流，进而助力研究者。</p>
                    </div>
                    <div className='grid-img'>
                        <img src={experience_plan_img6} alt='experience_plan_img6'/>
                    </div>
                </div>
                < br/>
                < br/>
                < br/>

                <div className='cataly-plan-section-title'>
                    <div className='gradient-border'></div>
                    <p className='cataly-plan-section-text bold-text'><span className='p-en bold-text'> Onion Experience Meeting -</span>  “沉浸体验” 临床研究 - 专题研讨 </p>
                </div>
                <div className='cataly-plan-container'>
                    <img src={experience_plan_table2} alt='experience_plan_table2'></img>
                </div>
                <div className='cataly-plan-container'>
                    <img src={experience_plan_table3} alt='experience_plan_table3'></img>
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
                                    <p className='portal-text green-text bolder cataly-center-text'> 专题研讨</p>
                                    <ul>
                                        <li>
                                            <p className='portal-text'>研究中“难点” 研讨，<span className='p-en bold-text'>KOL</span> 在研究设计上获得收获。 </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <p className='portal-text green-text bolder cataly-center-text'> <span className='p-en bold-text'>Onion </span> 研究体验 —激发研究灵感</p>
                                    <ul>
                                        <li>
                                            <p className='portal-text'> <span className='p-en bold-text'>KOL</span> 将自己的研究 <span className='p-en bold-text'>Idea</span> 与 <span className='p-en bold-text'>Onion ResearchAI<sup className='copy-right'> ®</sup></span> 信息交互；</p>
                                        </li>
                                        <li>
                                            <p className='portal-text'> <span className='p-en bold-text'>Onion ResearchAI<sup className='copy-right'> ®</sup></span> 引导可行的研究方向；</p>
                                        </li>
                                        <li>
                                            <p className='portal-text'> <span className='p-en bold-text'>Onion ResearchAI<sup className='copy-right'> ®</sup></span> 激发研究灵感</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='cataly-plan-schedule-col-content-right'>
                                    <div>
                                        <p className='portal-text green-text bolder cataly-center-text'>Onion Cataly 体验—明确研究情境</p>
                                        <ul>
                                            <li>
                                                <p className='portal-text'> <span className='p-en bold-text'>KOL</span> 将自己的研究 Idea 与 <span className='p-en bold-text'>Onion ResearchAI<sup className='copy-right'> ®</sup></span> 进行信息交互；</p>
                                            </li>
                                            <li>
                                                <p className='portal-text'> <span className='p-en bold-text'>KOL</span> & 员工共同探索 </p>
                                            </li>
                                            <li>
                                                <p className='portal-text'> <span className='p-en bold-text'>Onion ResearchAI<sup className='copy-right'> ®</sup></span> 进行研究情境分析。 </p>
                                            </li>
                                        </ul>
                                        <br/>
                                        <p className='portal-text green-text bolder cataly-center-text'>Onion Cataly 体验—明确研究情境</p>
                                        <ul>
                                            <li>
                                                <p className='portal-text'> <span className='p-en bold-text'>Onion ResearchAI<sup className='copy-right'> ®</sup></span> 的 <span className='p-en bold-text'>AI</span> 算法，提供关键问题的决策</p>
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
                                <p className='portal-medium-text'>会中 研讨 & 体验</p>
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
                
            </div>   
        )
    }
}

export default withRouter(ExperienceContent);