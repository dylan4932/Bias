import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

import education_intro from '../../../content-img/education-intro.png'
// import research_col1 from '../../../onion_icons/research-col1.png'
// import research_col2 from '../../../onion_icons/research-col2.png'
// import research_col3 from '../../../onion_icons/research-col3.png'
// import research_col4 from '../../../onion_icons/research-col4.png'
 

class Education_intro extends React.Component {
   
    
    render(){
        return (
            <div className='education-container'>
                <div className='education-content'>
                    <div className='education-left'>
                        <p id='title'>数以百计的论文，如何机构的研究能力？</p>
                        <p className='light-text'>每年都会有数以百计的研究课题、报告汇集在您的机构。每一个研究者或学生都希望获得有价值的意见提高论文的水准，但这似乎不现实，因为这将带来难以想象的工作量。</p>
                        <p className='light-text'>整体提高所在机构临床研究的能力，是未来的方向，但这并非易事。</p>
                        <div className='button-set'>
                            <button className='education-btnL'>Workload（工作负荷）… …</button>
                            <button className='education-btnR'>Persona（一对一）… …</button>
                        </div>
                        
                    </div>
                    <div className='education-right'>
                        <img src={education_intro} alt="education_img" ></img>
                    </div>
                </div>  
                
            </div>     
        )
    }
}

export default withRouter(Education_intro);