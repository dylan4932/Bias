import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import {withRouter} from 'react-router' 
import './index.css';
import { ListItemButton } from '@mui/material';

class Content extends React.Component {
    constructor(props) {
        super(props)
        // getBiasItems(this)
    }

    state = {
        items: [1, 2, 3, 4, 5, 6, 7, 7, 9, 10]
    }

    render(){
            // const { bias } = this.props;
        return (
            <div className='main-content'>
                <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                    {this.state.items.map(item => (
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <ImageIcon />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary="Bias #" 
                                    secondary="Bias description" />
                            </ListItemButton>
                        
                        </ListItem>
                        
                    ))}
                </List> 
                
            </div>
            
        )
    }
}

export default withRouter(Content);