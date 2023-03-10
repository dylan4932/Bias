import * as React from 'react';


import {withRouter} from 'react-router' 
import './index.css';
import Paper from '@mui/material/Paper'

class AboutPaper extends React.Component {
    
    state = {
        first: '偏倚往往会在所有阶段影响医疗研究的进行，并经常影响结果的大小和方向。为了获得“最少”偏倚的信息，研究人员必须承认偏倚的潜在存在，并采取措施避免和尽量减少其影响。同样，在评估研究结果时，我们必须了解不同类型的偏倚、它们的潜在影响以及这如何影响医疗决策中证据的解释和使用。',
        second: '为了更好地了解偏倚的持续存在、多样性和影响，我们正在编制一份来自 David Sackett 经典文章的偏倚目录。这些汇总是一项正在进行的工作，并描述了广泛的偏倚——概述了它们在研究中的潜在影响。',
        third: 'Sackett 的文章提到到偏见在研究中的重要性。他 1979 年发表在《慢性疾病杂志》上的论文“分析研究中的便宜”报告了“可能扭曲研究的设计、执行、分析和解释的偏倚目录”的初稿。Sackett 对出现的 35 种偏倚进行了分类。在抽样和测量方面，在临床试验的背景下，列出了 56 个可能影响病例对照和队列研究的偏倚。',
        forth: '他建议继续开发带注释的偏见目录作为研究的优先事项。 他表示，每个引文都应包括一个有用的定义、一个说明其影响的大小和方向的参考示例，以及对适当预防措施的描述（如果有的话）。',
        fifth: '我们持续欢迎相关内容、贡献和合作的进一步想法，以不断完善和更新此资源网站。'
    }
    render(){
        return (
            <div className='about-paper'>
                <Paper elevation={0}>
                    <p>{this.state.first}</p>
                    <br/>
                </Paper>
                <Paper elevation={0}>
                    <p>{this.state.second}</p>
                    
                </Paper>
                <Paper elevation={0}>
                    <p>{this.state.third}</p>
                    
                </Paper>
                <Paper elevation={0}>
                    <p>{this.state.forth}</p>
                    
                </Paper>
                <Paper elevation={0}>
                    <br/>
                    <p>{this.state.fifth}</p>
                    
                </Paper>
                <Paper elevation={0}>
                    <br/>
                    <br/>
                    <p>2022年7月 BJHPA - RDG </p>
                    
                </Paper>
                    
                    
                    
            </div>

            
        )
    }
}

export default withRouter( AboutPaper );