import * as React from 'react';
import List from '@mui/material/List';

import {withRouter} from 'react-router' 
import './index.css';
import { getBiasItems } from '../../../actions/bias';

class Content extends React.Component {

    goto(id){
        const myurl = '/Bias/'+id
        this.props.history.push(myurl)
    }
    
    state ={
        biases: []
    }
    // state = {
    //     bias: [
    //         {name:'一切都好文学偏见（引用偏倚）', definition:'当出版物（报告、文献）忽略或淡化争议或不同的结果时发生。'},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"},
    //         {name:'入院率偏倚', definition: "Onion：X、Y都影响”医院就医或入院“，而不是”入院“影响X、Y。应为Berkson's bias 是一种”选择偏倚“，在DAG图上应该呈现Colliper（对撞机）。"}]
    // }
    render(){
        getBiasItems(this);
        
        return (
            <div className='bias-list'>
                <List sx={{ minwidth: '300px', bgcolor: 'background.paper', float: 'left'}}>
                    {this.state.biases.map(item => (
                        
                        <div className='bias-item'>
                            <div className='bias-list-item'>
                                {/* <ListItem disablePadding>
                                <ListItemAvatar>
                                    <ImageIcon />
                                </ListItemAvatar>
                                <ListItemText 
                                    primaryTypographyProps={{fontSize: '14px'}} 
                                    primary={item.name} 
                                    secondaryTypographyProps={{fontSize: ' 12px'}}
                                    secondary={item.definition} />
                            
                                </ListItem> */}
                                <p className='bias-list-item-title'>{item.name}</p>
                                <p className='bias-list-item-subtitle'>{item.definition}</p>
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