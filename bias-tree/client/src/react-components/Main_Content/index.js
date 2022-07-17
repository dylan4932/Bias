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



class Content extends React.Component {
    
    constructor(props){
		super(props)
	}
    goto(id){
        console.log(this)
        const myurl = '/Bias/'+id
        this.props.history.push(myurl)
    }
    render(){
        const { bias } = this.props;
        return (
            <div class='bias-list'>
                <List sx={{ minwidth: '300px', bgcolor: 'background.paper', float: 'left'}}>
                    {bias.slice(0, 15).map(item => (
                        <ListItem
                            onClick={() => this.goto(item._id)} 
                            disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <ImageIcon />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={item.name} 
                                    secondary={item.definition} />
                            </ListItemButton>
                        
                        </ListItem>
                        
                    ))}
                </List> 
            </div>

            
        )
    }
}

export default withRouter(Content);