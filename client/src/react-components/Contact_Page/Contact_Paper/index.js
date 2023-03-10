import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import {withRouter} from 'react-router' 
import './index.css';
import Paper from '@mui/material/Paper'
import { Button, Divider, TextField, FormControl} from '@mui/material';
import { updateContact, addContact } from '../../../actions/contact';


class ContactPaper extends React.Component {
    
    state = {
        contact:'Connect（联络）',
        first: '如果您想联系Bias Dictionari+® 或 BJHPA | Research Design Group 的团队，请发送电子邮件至……@chinahpa.org',
        second: 'Bias Dictionari+® 将不断增添、修正所有关于 Bias（偏倚）的内容。如果您有兴趣和我们交流、探讨新的 Bias（偏倚），或者您对某个我们已经收纳的 Bias （偏倚）想和我们进行探讨，请填写下面的信息，并提供简短的背景说明，我们将力所能及尽快与您联系。请注意：我们的人力有限，如果未能在尽快的时间里和您联络，请您谅解。',
        title: "",
        explain: "",
        background: "",
        name: "",
        email: "",
        address: "",
        message: { type: "", body: "" }
    }

    
    render(){
        return (
            <div className='contact-paper'>
                <Paper elevation={0}>
                    <p className='contact-paper-title'>{this.state.contact}</p>
                </Paper>
                <Paper elevation={0}>
                    
                    <p>{this.state.first}</p>
                </Paper>
                <Paper elevation={0}>
                    <br/>
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
                    
                        <InputLabel required htmlFor="title-input">Bias（偏倚）的名称</InputLabel>
                    <FormControl  sx={{ width: '80%', display:'block' }}>
                        <TextField
                            id='title-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="title"
                            type="title"
                            onChange={e => updateContact(this, e.target)}/>
                    </FormControl>
                        
                        <br/>
                        <br/>
                        <InputLabel required htmlFor="explain-input">Bias（偏倚）的简单描述</InputLabel>
                    <FormControl  sx={{ width: '80%', display:'block' }}>      
                        <TextField
                            required
                            id='explain-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="explain" 
                            type="explain"
                            onChange={e => updateContact(this, e.target)}/>
                        </FormControl>
                        <br/>
                        <br/>
                        <InputLabel htmlFor="background-input">Bias（偏倚）产生的背景</InputLabel>
                    <FormControl  sx={{ width: '80%' }}>
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
                    </FormControl>
                        <br/>
                        <br/>
                        <InputLabel htmlFor="name-input">您的姓名</InputLabel>
                        <FormControl  sx={{ width: '80%' }}>
                        <TextField
                            id='name-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="name" 
                            type="name"
                            onChange={e => updateContact(this, e.target)}/>
                        </FormControl>
                        <br/>
                        <br/>
                        <InputLabel required htmlFor="email-input">您的联系方式</InputLabel>
                        <FormControl  sx={{ width: '80%' }}>
                            <TextField
                            id='email-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="email" 
                            type="email"
                            onChange={e => updateContact(this, e.target)}/>
                        </FormControl>
                        
                        <br/>
                        <br/>
                        <InputLabel  htmlFor="address-input">您所在的工作单位</InputLabel>
                        <FormControl  sx={{ width: '80%' }}>
                            <TextField
                            id='address-input'
                            fullWidth
                            autoFocus
                            margin="dense"
                            name="address" 
                            type="address"
                            onChange={e => updateContact(this, e.target)}/></FormControl>
                        
                        <br/>
                        <br/>
                        <div className='submit-btn'>
                        <FormControl  sx={{ width: '80%', minWidth: '120px' }}>
                            <Button
                                fullWidth
                                
                                variant="contained"
                                onClick={ () => addContact(this)}
                                >
                                提交
                            </Button></FormControl>
                        </div> 
                    </div>          
                </Paper>      
            </div>

            
        )
    }
}

export default withRouter( ContactPaper );