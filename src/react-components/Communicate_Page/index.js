import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import CommunicateIntro from './Communicate_intro';
import communicate_col1 from '../../onion_icons/communicate-col1.png'
import communicate_col2 from '../../onion_icons/communicate-col2.png'
import communicate_col3 from '../../onion_icons/communicate-col3.png'
import communicate_col4 from '../../onion_icons/communicate-col4.png'
import communicate_img1 from '../../content-img/communicate-img1.png'
import communicate_img2 from '../../content-img/communicate-img2.png'
import communicate_img3 from '../../content-img/communicate-img3.png'


class Communicate_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <CommunicateIntro/>
                <div className='communicate-subtitle'>
                    <div className='subtitle-col'>
                        <img src={communicate_col1} alt='research-colomn-icon1'></img>
                        <p className='portal-text'>如何找到对 <span className='bold-text p-en'>KOL</span>有价值的话题？如何获得与 <span className='bold-text p-en'>KOL</span> 沟通中的学术优势，并与KOL 进行同一高度的互动？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img id='check' src={communicate_col2} alt='research-colomn-icon2'></img>
                        <p className='portal-text'>如何成为临床研究的咨询专家？如何建立<span className='bold-text p-en'>KOL</span>对您个人、品牌 & 组织的认可度？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={communicate_col3} alt='research-colomn-icon3'></img>
                        <p className='portal-text'>怎样进行研究类的项目？如何提高 <span className='bold-text p-en'>KOL</span>的覆盖？如何优化 KOL的诊疗观念，使您的产品以正确的时机、正确的用法使用于正确的患者？</p>
                    </div>
                    <div className='subtitle-col'>
                        <img src={communicate_col4} alt='research-colomn-icon4'></img>
                        <p className='portal-text'>真实世界证据，有机会引导新产品快速准入，支撑未来政策谈判。如何获得真实世界证据？</p>
                    </div>
                </div>
                <div className='grid-container '>
                    <div className='grid-content'>
                        <p className='communicate-text'><span className='p-en'>With Onion！Healthcare companies</span>可以成为 <span className='p-en'>KOL </span>的科研 “<span className='p-en'>Solution</span> 专家”，提高客户满意度</p>
                  
                        <ul className='communicate-list'>
                            <li>整理 <span className='bold-text p-en'>KOL</span> 的研究思路；</li>
                            <li>激发 <span className='bold-text p-en'>KOL</span>研究的灵感、确定研究题目；</li>
                            <li>确定研究技术路线（<span className='bold-text p-en'>Path</span>）、形成研究关键框架（<span className='bold-text p-en'>Framework</span>）；</li>
                            <li>数据服务、统计分析服务；</li>
                            <li>导引研究方案（<span className='bold-text p-en'>Protocol</span>）& 报告（<span className='bold-text p-en'>report</span>）的撰写</li>
                        </ul>
                    </div>
                    <div id='communicate-img1' className='communicate-img'>
                        <img src={communicate_img1} alt='communciate_img1'/>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='communicate-img'>
                        <img src={communicate_img2} alt='communicate_img2'/>
                    </div>
                    <div className='grid-content'>
                        <p className='communicate-text'><span className='p-en'>With Onion</span> 的科研类项目，极大提升 <span className='p-en'>KOL</span> 覆盖，同时降低覆盖成本。</p>
                        <ul className='communicate-list'>
                            <li><span className='bold-text p-en'>With Onion，</span>可以同时服务大量研究者；大幅提高与 <span className='bold-text p-en'>KOL</span> 互动的时间、频率，并提供高质量话题;</li>
                            <li><span className='bold-text p-en'>With Onion，Healthcare companies &</span> 员工拥有了一位研究设计的专家级伙伴，在与<span className='bold-text p-en'>KOL</span>互动时，节省大量时间和精力，配合企业正在推广的研究信息，能获得针对产品的专业共识；</li>
                            <li><span className='bold-text p-en'>With Onion，KOL</span> 将更加愿意与您进行学术讨论，在学术上更加依赖您，他将重新看待<span className='bold-text p-en'>Healthcare companies。</span></li>
                    
                        </ul>
                    </div>
                </div>
                <div className='grid-container '>
                    <div className='communicate-img'>
                        <p className='communicate-text'><span className='p-en'>With Onion</span>！使<span className='p-en'>Healthcare companies & </span> 部门 成为业界的创新引领者</p>
                  
                        <ul className='back-space'>
                            <li>您的团队将拥有一致的咨询水准，在与 <span className='bold-text p-en'>KOL</span> 讨论应用方案时实现科研级的引导；</li>
                            <li>您的团队可以“重塑”与 <span className='bold-text p-en'>KOL</span>  的互动模式，将会赢得 <span className='bold-text p-en'>KOL</span>  更多的尊重与钦佩；</li>
                            <li>您的团队将成为 <span className='bold-text p-en'>KOL</span> 管理的品牌团队、创新团队，受业界景仰；</li>
                        </ul>
                    </div>
                    <div className='communicate-img'>
                        <img src={communicate_img3} alt='communicate_img3'/>
                    </div>
                </div>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Communicate_Page);