import * as React from 'react';
import List from '@mui/material/List';

import {withRouter} from 'react-router' 
import './index.css';

class Content extends React.Component {

    goto(id){
        const myurl = '/Bias/'+id
        this.props.history.push(myurl)
    }
    
   
    render(){
        const { biases } = this.props;
        
        return (
            <div className='bias-list'>
                <List sx={{ minwidth: '300px', bgcolor: 'background.paper', float: 'left'}}>
                    { biases.map(item => (
                        
                        <div className='bias-item'>
                            <div className='bias-list-item'>
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