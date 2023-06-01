import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import {withRouter} from 'react-router' 
import './index.css';
import Paper from '@mui/material/Paper'
import { Button, Divider, TextField, FormControl} from '@mui/material';
import { updateContact, addContact } from '../../../actions/contact';


class ContactPaper extends React.Component {
    
    state = {
        contact:'',
        first: '',
        second: '',
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
                    <p className='bias-subtitle'><span className='p-en'>Connect</span>（联络）</p>
                </Paper>
                <Paper elevation={0}>
                    
                    <p className='bias-text'>如果您想联系<span className='bold-text p-en'>Bias Dictionari+®</span> 或 <span className='bold-text p-en'>BJHPA | Research Design Group</span> 的团队，请发送电子邮件至<span className='bold-text p-en'>……@chinahpa.org</span></p>
                </Paper>
                <Paper elevation={0}>
                    <br/>
                    <p className='bias-text'><span className='bold-text p-en'>Bias Dictionari+®</span> 将不断增添、修正所有关于 <span className='bold-text p-en'>Bias</span>（偏倚）的内容。如果您有兴趣和我们交流、探讨新的 <span className='bold-text p-en'>Bias</span>（偏倚），或者您对某个我们已经收纳的 <span className='bold-text p-en'>Bias</span> （偏倚）想和我们进行探讨，请填写下面的信息，并提供简短的背景说明，我们将力所能及尽快与您联系。</p>
                    
                </Paper>
                <Paper elevation={0}>
                    <p className='bias-text'>请注意：我们的人力有限，如果未能在尽快的时间里和您联络，请您谅解。</p>    
                </Paper>
                {/* <Paper elevation={0}>
                    <p>{this.state.forth}</p>
                   
                    
                </Paper> */}
                <br/>
                <br/>
                <Divider/>
                <Paper elevation={0}>
                    <br/>
                    <div className='contact-info'>
                    
                        <InputLabel required htmlFor="title-input"><span className='bold-text bias-text'><span className='p-en'>Bias</span>（偏倚）的名称</span></InputLabel>
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
                        <InputLabel required htmlFor="explain-input"><span className='bold-text bias-text'><span className='p-en'>Bias</span>（偏倚）的简单描述</span></InputLabel>
                    <FormControl  sx={{ width: '80%', display:'block' }}>      
                        <TextField
                            required
                            id='explain-input'
                            fullWidth
                            margin="dense"
                            name="explain" 
                            type="explain"
                            onChange={e => updateContact(this, e.target)}/>
                        </FormControl>
                        <br/>
                        <br/>
                        <InputLabel required htmlFor="background-input"><span className='bold-text bias-text'><span className='p-en'>Bias</span>（偏倚）产生的背景</span></InputLabel>
                    <FormControl  sx={{ width: '80%' }}>
                        <TextField
                            required
                            id='background-input'
                            multiline
                            fullWidth
                            minRows={5}
                            margin="dense"
                            name="background" 
                            type="background"
                            onChange={e => updateContact(this, e.target)}/>
                    </FormControl>
                        <br/>
                        <br/>
                        <InputLabel required htmlFor="name-input"><span className='bold-text bias-text'>您的姓名</span></InputLabel>
                        <FormControl  sx={{ width: '80%' }}>
                        <TextField
                            id='name-input'
                            fullWidth
                            margin="dense"
                            name="name" 
                            type="name"
                            onChange={e => updateContact(this, e.target)}/>
                        </FormControl>
                        <br/>
                        <br/>
                        <InputLabel required htmlFor="email-input"><span className='bold-text bias-text'>您的联系方式</span></InputLabel>
                        <FormControl  sx={{ width: '80%' }}>
                            <TextField
                            id='email-input'
                            fullWidth
                            margin="dense"
                            name="email" 
                            type="email"
                            onChange={e => updateContact(this, e.target)}/>
                        </FormControl>
                        
                        <br/>
                        <br/>
                        <InputLabel  htmlFor="address-input"><span className='bold-text bias-text'>您的工作单位</span></InputLabel>
                        <FormControl  sx={{ width: '80%' }}>
                            <TextField
                            id='address-input'
                            fullWidth
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
                                sx={{fontFamily:"Microsoft YaHei"}}
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