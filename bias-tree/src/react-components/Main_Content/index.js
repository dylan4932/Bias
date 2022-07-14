import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import {withRouter} from 'react-router' 
import './index.css';
import { ListItemButton } from '@mui/material';
import Sidebar from '../Sidebar';

class Content extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    state = {
        bias: [
            {name: '入院率偏倚（伯克森偏倚）', explain: '以医院住院患者为研究对象，这种受试者的选择，影响了研究中的变量，导致暴露与研究中的疾病（结局）之间存在偏倚时，就会出现这种偏倚。'}, 
            {name: '一切都好文学偏见（引用偏倚）', explain: '当出版物（报告、文献）忽略或淡化争议或不同的结果时发生。'}, 
            {name: '分配偏倚', explain: '在临床试验中，将受试者分配到各组的系统差异。'}, 
            {name: '恐惧偏见', explain: '当研究受试者因被观察时而做出不同反应。'}, 
            {name: '确定偏倚', explain: '识别研究中包含的个体的系统性差异，或研究中数据收集的失真。'},
            {name: '脱落偏倚（网上翻译可见”失访偏倚)', explain: "试验中研究组的受试者失访不均衡。"},
            {name: '易得性偏倚', explain: '所有研究问题和决策，无论是考虑测试的诊断准确性或者干预的有效性，都涉及数据解释。临床决策基于数据，这些数据可能来自于常规医疗、已发表的证据、指南或临床医生的偏好或经验。'},
            {name: '修辞偏倚', explain: '用于说服读者而提供证据的论点。'},
            {name: '向心偏倚（选择性转诊偏倚）', explain: "某些临床医生和机构的声誉导致患有特定疾病或暴露的患者被吸引。"},
            {name: '年代偏倚（非同期对照偏倚）', explain: "当较早分配到干预组的研究受试者，相对于后面的研究受试者，接受到不同的暴露，或不同的风险时，产生的偏倚。"},
            {name: '对撞机偏倚', explain: "一种扭曲暴露和结果之间关联的偏倚，“暴露和结果的共同影响的变量”被控制所引起。"},
            {name: '依从性偏倚', explain: "遵守干预措施的受试者与不遵守干预措施的受试者在某种程度上的差异，后者会系统地影响研究的结果。"},
            {name: '实证偏倚、确认偏倚', explain: "搜索和选用信息来支持个人的想法、信仰或假设。"},
            {name: '混杂', explain: "一种扭曲，它改变了暴露和结果之间的关联，因为一个因素与暴露和结果独立相关。"}]
    }

    render(){
        return (
            <div className='main-content'>
                <List sx={{ minwidth: '300px', bgcolor: 'background.paper', float: 'left'}}>
                    {this.state.bias.map(item => (
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <ImageIcon />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={item.name} 
                                    secondary={item.explain} />
                            </ListItemButton>
                        
                        </ListItem>
                        
                    ))}
                </List> 
                <Sidebar sx={{float: 'right'}}/>
            </div>
            
        )
    }
}

export default withRouter(Content);