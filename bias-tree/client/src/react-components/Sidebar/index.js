import React, { useId } from 'react';
import './index.css';
import { uid } from "react-uid";
import { withRouter } from 'react-router' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            often: [
                {name: '入院率偏倚（伯克森偏倚）', class: '分类: 选择性偏倚-合格人群定义不当'}, 
                {name: '检测偏倚', class: '分类: 选择性偏倚-目标人群诊断不均匀'}, 
                {name: '观察者偏倚偏倚', class: '分类: 信息偏倚-错分偏倚'},
                {name: '检出症候', class: '分类:选择性偏倚-诊断偏倚'}, 
                {name: '开始时间偏倚', class: '分类:选择性偏倚-时间相关偏倚'}
            ],
            tags: []
        }
        this.onTagsChange = this.onTagsChange.bind(this);
    }

    onTagsChange = (event, values) => {
        const myurl = '/Bias/'+values._id
        this.props.history.push(myurl)
    }
    render(){
        const { biases } = this.props;
        return (
            <div className='side-bar'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ biases }
                    getOptionLabel={option => option.name}
                    onChange={this.onTagsChange}
                    sx={{ width: 260 }}
                    renderInput={(params) => <TextField {...params} label="搜索偏倚" />}
                    />
                <Card sx={{ minWidth: 260, marginTop: 10}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                        常见偏倚
                        </Typography>
                        <br />
                        {this.state.often.map( bias => (
                            
                            <Typography key={uid(bias)}sx={{cursor:'default'}} variant="h7" component="div">
                                {bias.name}
                            <Typography key={uid(bias)}sx={{ fontSize: 10, cursor:'default' , mb: 1 }}  color="text.secondary">
                                {bias.class}
                            </Typography>
                            </Typography>
                            
                        ))}
                        
                        
                    </CardContent>
            </Card>
            </div>  
        )
    }
}

// const biases = [
//     {label: '入院率偏倚（伯克森偏倚）', explain: '以医院住院患者为研究对象，这种受试者的选择，影响了研究中的变量，导致暴露与研究中的疾病（结局）之间存在偏倚时，就会出现这种偏倚。'}, 
//     {label: '一切都好文学偏见（引用偏倚）', explain: '当出版物（报告、文献）忽略或淡化争议或不同的结果时发生。'}, 
//     {label: '分配偏倚', explain: '在临床试验中，将受试者分配到各组的系统差异。'}, 
//     {label: '恐惧偏见', explain: '当研究受试者因被观察时而做出不同反应。'}, 
//     {label: '确定偏倚', explain: '识别研究中包含的个体的系统性差异，或研究中数据收集的失真。'},
//     {label: '脱落偏倚（网上翻译可见”失访偏倚)', explain: "试验中研究组的受试者失访不均衡。"},
//     {label: '易得性偏倚', explain: '所有研究问题和决策，无论是考虑测试的诊断准确性或者干预的有效性，都涉及数据解释。临床决策基于数据，这些数据可能来自于常规医疗、已发表的证据、指南或临床医生的偏好或经验。'},
//     {label: '修辞偏倚', explain: '用于说服读者而提供证据的论点。'},
//     {label: '向心偏倚（选择性转诊偏倚）', explain: "某些临床医生和机构的声誉导致患有特定疾病或暴露的患者被吸引。"},
//     {label: '年代偏倚（非同期对照偏倚）', explain: "当较早分配到干预组的研究受试者，相对于后面的研究受试者，接受到不同的暴露，或不同的风险时，产生的偏倚。"},
//     {label: '对撞机偏倚', explain: "一种扭曲暴露和结果之间关联的偏倚，“暴露和结果的共同影响的变量”被控制所引起。"},
//     {label: '依从性偏倚', explain: "遵守干预措施的受试者与不遵守干预措施的受试者在某种程度上的差异，后者会系统地影响研究的结果。"},
//     {label: '实证偏倚、确认偏倚', explain: "搜索和选用信息来支持个人的想法、信仰或假设。"},
//     {label: '混杂', explain: "一种扭曲，它改变了暴露和结果之间的关联，因为一个因素与暴露和结果独立相关。"}]

export default withRouter(Sidebar);