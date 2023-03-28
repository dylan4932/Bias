import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import EducationIntro from './Education_intro';
import education_img1 from '../../content-img/education-img1.png'
import education_img2 from '../../content-img/education-img2.png'

class Education_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <EducationIntro/>
                <div className='education-subtitle'>
                    <div className='subtitle-col'>
                        {/* <img src={research_col1} alt='research-colomn-icon1'></img> */}
                        <p className='portal-text'>如何引导研究者或学生确定研究的类型？</p>
                    </div>
                    <div className='subtitle-col'>
                        {/* <img src={research_col2} alt='research-colomn-icon2'></img> */}
                        <p className='portal-text'>如何让研究者或学生以规范的“模式”撰写研究方案？将合适的内容写在合适的位置。</p>
                    </div>
                    <div className='subtitle-col'>
                        {/* <img src={research_col3} alt='research-colomn-icon3'></img> */}
                        <p className='portal-text'>如何帮助研究者或学生建立一个好的“研究方案”？包括“研究方案” & “统计分析计划”？</p>
                    </div>
                    <div className='subtitle-col light-text'>
                        {/* <img src={research_col4} alt='research-colomn-icon4'></img> */}
                        <p className='portal-text'>如何提高整个医疗机构的临床研究水准？</p>
                    </div>
                </div>
                <div className='education-grid'>
                    <div className='grid-img'>
                        <img src={education_img1} alt='education-img1'></img>
                    </div>
                    <div className='grid-img'>
                        <img src={education_img2} alt='education-img2'></img>
                    </div>
                </div>
                <div className='education-block1'>
                    <p className='education-text'><span className='p-en'>With Onion</span>，您将成为医生 & 学生的“<span className='p-en'>personal trainer</span>” </p>
                  
                    <ul>
                        <li className='education-li'>大量的 研究方案 & 论文，<span className='bold-text p-en'>Onion</span> 可以帮助作者进行方案和报告的模拟输出，学生们可以进行对照，修定；</li>
                        <li className='education-li'>整体性提高医疗机构的研究水准</li>
                  </ul>
                </div>
                
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Education_Page);