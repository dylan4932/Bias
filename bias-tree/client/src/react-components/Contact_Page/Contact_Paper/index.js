import * as React from 'react';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {withRouter} from 'react-router' 
import './index.css';
import Paper from '@mui/material/Paper'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 14,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
      ]),

      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

class ContactPaper extends React.Component {
    
    constructor(props){
		super(props)
	}
    state = {
        first: '如果您想联系偏倚汇总网站 或 RDG 团队的成员，请发送电子邮件至 rdg@hpa.org',
        second: '该偏倚汇总目录将随着时间的推移添加新的偏倚而丰富。 如果您有兴趣撰写新的偏倚，请填写下面的简短背景表格，我们会尽快回复您。 请注意，回复可能需要两周时间'
    }

    
    render(){
        return (
            <div className='about-paper'>
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
                    
                </Paper>
                <Paper elevation={0}>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                    偏倚标题
                    </InputLabel>
                    <BootstrapInput placholder="新增偏倚" id="bootstrap-input" />
                </FormControl>
                
                </Paper>
                    
                    
            </div>

            
        )
    }
}

export default withRouter( ContactPaper );