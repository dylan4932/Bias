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