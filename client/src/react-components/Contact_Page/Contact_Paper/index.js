import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import {withRouter} from 'react-router' 
import './index.css';
import Paper from '@mui/material/Paper'
import { Button, Divider, TextField } from '@mui/material';
import { updateContact, addContact } from '../../../actions/contact';


class ContactPaper extends React.Component {
    
    constructor(props){
		super(props)
	}
    state = {
        first: '如果您想联系偏倚汇总网站 或 RDG 团队的成员，请发送电子邮件至 rdg@chinahpa.org',
        second: '该偏倚汇总目录将随着时间的推移添加新的偏倚而丰富。 如果您有兴趣撰写新的偏倚，请填写下面的简短背景表格，我们会尽快回复您。 请注意，回复可能需要两周时间',
        title: "",
        explain: "",
        background: "",
        name: "",
        email: "",
        message: { type: "", body: "" }
    }

    
    render(){
        return (
            <div className='contact-paper'>
                <Paper elevation={0}>
                    <br/>
                    <p>{this.state.first}</p>
                </Paper>
                <Paper elevation={0}>
                    <p>{this.state.second}</p>
                    
                </Paper>
                <Paper elevation={0}>
                    <p>{this.state.third}</p>
                    
                </Paper>
                <Paper elevation={0}>
                    <p>{this.state.forth}</p>
                    <br/>
                    <Divider/>
                </Paper>
                <Paper elevation={0}>
                    <br/>
                    <div className='contact-info'>
                        <InputLabel htmlFor="title-input">偏倚标题</InputLabel>
                        <TextField
                            id='title-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="title"
                            type="title"
                            onChange={e => updateContact(this, e.target)}/>
                        <InputLabel htmlFor="explain-input">简短介绍</InputLabel>
                        <TextField
                            required
                            id='explain-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="explain" 
                            type="explain"
                            onChange={e => updateContact(this, e.target)}/>
                        <InputLabel htmlFor="background-input">背景介绍</InputLabel>
                        <TextField
                            required
                            id='background-input'
                            multiline
                            fullWidth
                            autoFocus
                            minRows={5}
                            margin="dense"
                            name="background" 
                            type="background"
                            onChange={e => updateContact(this, e.target)}/>
                        
                        <InputLabel htmlFor="name-input">您的姓名</InputLabel>
                        <TextField
                            id='name-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="name" 
                            type="name"
                            onChange={e => updateContact(this, e.target)}/>
                        <InputLabel htmlFor="email-input">您的邮箱</InputLabel>
                        <TextField
                            id='email-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="email" 
                            type="email"
                            onChange={e => updateContact(this, e.target)}/>
                        <br />
                        <div className='submit-btn'>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={ () => addContact(this)}
                                >
                                提交
                            </Button>
                        </div> 
                    </div>          
                </Paper>      
            </div>

            
        )
    }
}

export default withRouter( ContactPaper );