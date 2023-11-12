import React from 'react';
import './index.css';
import { withRouter } from 'react-router'; 
import rsearch_img1 from '../../../content-img/rsearch-img1.jpg'
import rsearch_img2 from '../../../content-img/rsearch-img2.png'
import rsearch_plan_table from '../../../content-img/rsearch-plan-table.png'

class RsearchPlanContent extends React.Component {
    
    render(){
        return (
            <div className='rsearch-content'>
                <div className='plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-img'>
                            <img src={rsearch_img1} alt='rsearch_img1'/>
                        </div>
                        <div className='portal-content' id='move-up'> 
                            <p className='portal-subtitle'><span className='p-en'>Onion RsearchAI <sup id='copy-right'> ®</sup> + Healthcare company employee </span> 可以成为 <span className='p-en'>KOL</span> 研究的“咨询顾问”</p>

                            <p className='portal-text'> 建立专业的“研究咨询团队”何其困难！</p>
                            <p className='portal-text'> 掌握 <span className='p-en bold-text'>Onion RsearchAI <sup id='copy-right'> ®</sup></span> 的学习成本是可以接受的，如同掌握一款<span className='bold-text p-en'>app</span>。</p>
                            <p className='portal-text'> <span className='p-en bold-text'>Healthcare company employee</span> 熟练操作 <span className='p-en bold-text'>Onion RsearchAI <sup id='copy-right'> ®</sup></span> 系统，及其掌握相关的研究知识；帮助 <span className='p-en bold-text'>Healthcare company</span>  建立“研究咨询团队”；</p>
                            <p className='portal-text'> 通过学习， <span className='p-en bold-text'>Onion RsearchAI <sup id='copy-right'> ® </sup> + Healthcare company employee </span></p>
                            <p className='portal-text tab-space'> = 资深研究顾问</p>
                            <br/>
                            <p className='portal-text'> 重构 “<span className='bold-text p-en'>Health company</span>” & “<span className='bold-text p-en'>KOL</span>” 学术互动的模式，深远影响行业发展。</p>
                        </div>
                    </div>

                </div>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={rsearch_img2} alt='rsearch_img2'/>
                    </div>
                    <div className='portal-content'> 
                        <p className='portal-subtitle rsearch-subtitle-wider'><span className='p-en bold-text'>Building</span> 循证咨询团队，改变沟通模式</p>
                        <br />
                        <p className='portal-text'> 建立专业的“循证咨询团队”，革命性的改变与 <span className='p-en bold-text'>KOL</span> 团队的沟通模式。建立战略性的合作关系。</p>
                        
                        <p className='portal-text'> 使 <span className='p-en bold-text'>Health Company</span> 建立持续的竞争优势。</p>
                        <br/>
                    </div>
                    
                </div>
                <div className='main-plan-container'>
                    <p className='plan-text'><span className='p-en'>Onion RsearchAI <sup id='rsearch-plan-copy-right'>®</sup></span> 是一个组合服务，包含：</p>
                    <img src={rsearch_plan_table} alt='rsearch_plan_table'></img>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(RsearchPlanContent);