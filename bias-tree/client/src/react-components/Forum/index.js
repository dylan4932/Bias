import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import {BiLike, BiDislike} from "react-icons/bi";
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import {withRouter} from 'react-router' 
import './index.css';
import { Divider, TextField, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import {  addComment, updateComment } from '../../actions/comment';

class Forum extends React.Component {
    
    constructor(props){
		super(props)
        
	}
    state = {
        comment: '',
        date: '',
        like: 0,
        dislike: 0,
    }
    render(){
        const { commentsToShow } = this.props;
        return (
            <div className='bias-list'>
                <List sx={{ minwidth: '300px', bgcolor: 'background.paper', float: 'left'}}>
                    {commentsToShow.map(item => (
                        
                        <div className='forum-item'>
                            <Paper>
                                <div className='forum-list-item'>
                                    <ListItem disablePadding>
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={item.comment} 
                                        secondary={item.date} />
                                
                                    </ListItem>
                                    <Button> <BiLike />{'('+item.like+')'}</Button>
                                    <Button color='error'> <BiDislike /> {'('+item.dislike+')'}</Button>
                                    
                                </div>
                                
                            </Paper>

                            {/* <button className='bias-btn' onClick={() => this.goto(item._id)} >了解更多</button> */}
                        </div>     
                    ))}
                </List> 
                <Divider/>
                <div className='submit-container'>
                    
                    <InputLabel htmlFor="comment-input">提交您的看法: </InputLabel>
                    <TextField
                        required
                        id='comment-input'
                        multiline
                        fullWidth
                        autoFocus
                        minRows={5}
                        margin="dense"
                        name="comment" 
                        type="comment"
                        onChange={e => updateComment(this, e.target)}/>
                    <div className='comment-btn'>
                        <Button
                            color='secondary'
                            fullWidth
                            variant="contained"
                            onClick={ () => addComment(this)}
                            >
                            提交
                        </Button>
                    </div>               
                </div>
            </div>

            
        )
    }
}

export default withRouter( Forum );