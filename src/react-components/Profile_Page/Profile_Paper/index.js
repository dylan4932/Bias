import * as React from 'react';


import {withRouter} from 'react-router' 
import './index.css';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';

class ProfilePaper extends React.Component {
    
    usr = {
        username:'',
        name: '',
        phone: '',
        email: '',
        hospital: '',
        department: '',
        company: '',
        favorite: [],
        created: '',
        expire: ''
    }
    render(){
        const date = new Date();
        const hrs = date.getHours();
        var greet;
        if (hrs > 5 && hrs < 12)
            greet = '早上好';
        else if (hrs >= 12 && hrs <= 17)
            greet = '下午好';
        else if ((hrs >= 17 && hrs <= 24) || hrs <=5)
            greet = '晚上好'
        const { usr } = this.props;
        return (
            <div className='profile-paper'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: '100%'
                    },
                    }}>
                    <Paper elevation={0}>
                        <p className='bias-paper-name-title'>
                            
                        </p>
                        <p className='bias-paper-name-subtitle'>
                            
                        </p>
                    </Paper>
                    <Paper elevation={0}>
                        <p><span className='bold-text'>{greet}</span>, {usr.name} </p> 
                        {/* <p >姓名： {usr.name} </p> */}
                        <p >电话： {usr.phone} </p>
                        <p >医院： {usr.hospital} </p>
                        <p >公司： {usr.company} </p>
                        <p >部门： {usr.department} </p>
                        <p>创建时间：{usr.createdTime} </p>
                        <p>上次登陆时间：{usr.updatedTime} </p>
                        <p>到期时间：{usr.expireTime}</p>
                    </Paper>
                    <Paper elevation={0}>
                        <p></p>
                        <p>
                            
                        </p>
                    </Paper>
                </Box>
       
            </div>

            
        )
    }
}

export default withRouter( ProfilePaper );