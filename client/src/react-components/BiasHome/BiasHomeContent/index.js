import React from 'react';

import './index.css';
import { withRouter } from 'react-router';

 

class  BiasHomeContent extends React.Component {
   
    
    render(){
        return (
            <div className='bias-home-content'>
                <div className='bias-home-content-left'>
                    <p className='bias-home-content-subtitle'>为什么要建立 Bias Dictionari+®</p>
                    <p>Bias（偏倚）可能存在于临床研究的任何阶段，它的存在往往影响研究的结果。不仅可以影响研究结果的大小，甚至可以导致结果与真实方向相反。Bias（偏倚）其本身具有方向性，可能低估研究结果，有时也可能夸大。</p>
                    <p>研究者必须正视 Bias（偏倚）存在的可能，并采用策略避免和最小化 Bias（偏倚）对研究的影响。同样的，研究文献的读者在评估研究结论时，必须意识到不同类型的 Bias（偏倚）的潜在影响，清楚如何在临床实践中对循证医学证据的解释和应用。</p>
                    <p>Sackett 是我们认识 Bias（偏倚）的重要引领者，1979年他发表在                         “Journal of Chronic Diseases”（《慢性疾病杂志》）上的论文“Bias in Analytic Research”（《分析研究中的偏倚》）是最早期针对 Bias （偏倚）最具影响力的文献。               Sackett 告诉研究者们 “Bias（偏倚）”在研究中的重要性。他第一个报告了“在研究设计、执行、分析和解释的过程中，可能产生”研究结果扭曲“的 Bias（偏倚）清单。 Sackett 列出了研究中可能出现的35种 Bias（偏倚）。至今，Sackett 的文献是几乎所有 Bias （偏倚）研究者重要的学习内容。</p>
                    <p>Sackett 本人建议针对 Bias （偏倚）进行总结作为临床研究领域的优先事项。国际上，很多研究者和机构在持续的编制带有详细注释的 Bias （偏倚）目录。</p>
                    <p>在中国，临床研究已 RCT 为主流，很多研究者认为 RCT 中的“随机设计”可以较好的控制 Bias（偏倚）的影响。目前，中国针对Bias（偏倚）进行研究、目录编制的工作仍需要研究者给予更多的关注。</p>
                    <br/>
                    <br/>
                    <p className='bias-home-content-subtitle'>Bias Dictionari+® 的发起</p>
                    <p>2016年以来，Real World Evidence（真实世界证据） 概念的出现，受到医疗从业者的广泛热议。 Real World Evidence（真实世界证据）的本质包括了传统研究中的“Observational study”（观察性研究）和 “PCT” 实用性临床试验，这些研究中存在大量的 Bias（偏倚）和其对研究的影响。</p>
                    <p>2017年，BJHPA（北京健康促进会）成立 “BJHPA | Research Design Group”（研究设计小组），同时于“目人（苏州）医学科技有限公司合作，启动了 ”Bias Dictionari+® “项目。</p>

                </div>
                <div className='bias-home-content-right'>
                    <div className='intro-content-right-title'>
                        <p className='bias-home-content-right-title'>检索最多的Bias (偏倚)</p>
                    </div>
                    <div className='bias-home-content-right-border'>
                    </div>
                    <ul>
                        <li className='red'>Confounding bias</li>
                        <li className='blue'>Collider bias</li>
                        <li className='green'>Selection bias</li>
                        <li className='purple'>Information bias</li>
                        <li className='cyan'>Recall bias</li>
                        <li className='red'>Detection bias</li>
                        <li className='blue'>Neyman bias</li>
                        <li className='green'>Admission bias</li>
                        <li className='purple'>Follow-up bias</li>
                        <li className='cyan'>Interviewer bias</li>
                    </ul>
                </div>
            </div>     
        )
    }
}

export default withRouter(BiasHomeContent);