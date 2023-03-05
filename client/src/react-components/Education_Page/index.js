import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import Portal_list from '../Portal_list';
import Footer from '../footer';
import EducationIntro from './Education_intro';
import education_img1 from '../../content-img/education-img1.png'
import education_img2 from '../../content-img/education-img2.png'

class Education_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <Portal_list/>
                <EducationIntro/>
                <div className='education-grid'>
                    <div className='grid-img'>
                        <img src={education_img1} alt='education-img1'></img>
                    </div>
                    <div className='grid-img'>
                        <img src={education_img2} alt='education-img2'></img>
                    </div>
                </div>
                <div className='education-block1'>
                    <p className='education-text'>With Onion，您将成为医生 & 学生的“personal trainer” </p>
                  
                    <ul>
                        <li className='education-li'>大量的 研究方案 & 论文，Onion 可以帮助作者进行方案和报告的模拟输出，学生们可以进行对照，修定；</li>
                        <li className='education-li'>整体性提高医疗机构的研究水准</li>
                  </ul>
                </div>
                
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Education_Page);