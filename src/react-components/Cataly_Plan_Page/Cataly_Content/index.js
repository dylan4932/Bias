import React from 'react';
import './index.css';
import { withRouter } from 'react-router'; 
import cataly_img1 from '../../../content-img/cataly-img1.jpg'
import cataly_img2 from '../../../content-img/cataly-img2.jpg'


class CatalyContent extends React.Component {
    
    render(){
        return (
            <div className='cataly-content'>
                <div className='cataly-plan-grid'>
                    <div className='grid-container'>
                        <div className='grid-img'>
                            <img src={cataly_img1} alt='cataly_img1'/>
                        </div>
                        <div className='portal-content' id='move-up'> 
                            <p className='portal-subtitle'><span className='p-en'>Onion RsearchAI <sup className='copy-right'> ®</sup> | Cataly + Healthcare company employee </span> 可以成为 医疗管理者 的“咨询顾问”</p>

                            <p className='portal-text'> 医疗管理的循证研究是一个充满机会的领域。医疗管理的决策必将需要循证证据的支持，这是医疗管理的发张方向。</p>
                            <p className='portal-text'> 医疗管理者将自己的管理经验、管理措施转化为“循证证据”，需要大量的学术支持。这种学术支持是  <span className='p-en bold-text'>Health Company</span> 与医疗管理层建立“战略合作关系的”必由之路“。</p>
                            <p className='portal-text'> 掌握 <span className='p-en bold-text'>Onion RsearchAI <sup id='copy-right'> ®</sup> ｜ Cataly</span> 的学习成本是可以接受的，如同掌握一款<span className='bold-text p-en'>app</span>。</p>
                            <p className='portal-text'> <span className='p-en bold-text'>Healthcare company employee</span> 熟练操作 <span className='p-en bold-text'>Onion RsearchAI <sup id='copy-right'> ®</sup> ｜ Cataly</span> 系统，及掌握其相关的研究知识， <span className='p-en bold-text'>Healthcare company</span> 建立“医疗管理循证研究的咨询团队”；是未来学术互动的良好方式</p>
                            <p className='portal-text'> 通过学习， <span className='p-en bold-text'>Onion RsearchAI <sup id='copy-right'> ® </sup> ｜ Cataly + </span></p>
                            <p className='portal-text double-space'> Healthcare company employee = 医管循证专家</p>
                            
                        </div>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-img'>
                        <img src={cataly_img2} alt='cataly_img2'/>
                    </div>
                    <div className='portal-content'> 
                        <p className='portal-subtitle rsearch-subtitle-wider'><span className='p-en bold-text'>Building</span> 循证咨询团队，改变沟通模式</p>
                        <br />
                        <p className='portal-text'> 建立专业的“医疗管理循证研究的咨询团队”，革命性的改变与 医疗管理团队的沟通模式。建立战略性的合作关系。</p>
                        
                        <p className='portal-text'> 使 <span className='p-en bold-text'>Health Company</span> 建立持续的竞争优势。</p>
                        <br/>
                    </div>
                    
                </div>
            </div>   
        )
    }
}

export default withRouter(CatalyContent);