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
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';

class Content extends React.Component {
    
    constructor(props){
		super(props)
	}
    goto(id){
        const myurl = '/Bias/'+id
        this.props.history.push(myurl)
    }
    state = {
        bias: [
            {name:'一切都好文学偏见（引用偏倚）', definition:'当出版物（报告、文献）忽略或淡化争议或不同的结果时发生。'},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
            {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"}]
    }
    render(){
        const { bias } = this.props;
        return (
            <div className='bias-list'>
                <List sx={{ minwidth: '300px', bgcolor: 'background.paper', float: 'left'}}>
                    {bias.map(item => (
                        
                        <div className='bias-item'>
                            <div className='bias-list-item'>
                                <ListItem disablePadding>
                                {/* <ListItemAvatar>
                                    <ImageIcon />
                                </ListItemAvatar> */}
                                <ListItemText 
                                    primary={item.name} 
                                    secondary={item.definition} />
                            
                                </ListItem>
                            </div>
                            
                            <button className='bias-btn' onClick={() => this.goto(item._id)} >了解更多</button>
                        </div>     
                    ))}
                </List> 
            </div>

            
        )
    }
}

export default withRouter(Content);