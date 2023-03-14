import React from 'react';

import './index.css';
import { withRouter } from 'react-router';
import TextField from '@mui/material/TextField';
import { updateLoginForm, login } from "../../../actions/user";
 

class loginContainer extends React.Component {
   constructor(props){
        super(props);
   }
    
    render(){
        const {app} = this.props;
        return (
            <div className='bias-login-container'>
                <dt className='login-subtitle-container'>
                    <p className='bias-subtitle'><span className='p-en'>Bias Dictionari+®</span> 登陆</p>
                </dt>
                <dt className='login-input-container'>
                    <TextField 
                        name="username" 
                        label="用户名" 
                        style={{ width: 300, height: 80 }} 
                        size="medium" 
                        type="text" 
                        variant="outlined" 
                        onChange={e => updateLoginForm(this, e.target)} 
                        required />
                    <TextField 
                        name="password" 
                        label="密码" 
                        style={{ width: 300, height: 80 }} 
                        size="medium" 
                        type="password" 
                        variant="outlined" 
                        onChange={e => updateLoginForm(this, e.target)} 
                        required />
                </dt>

                <dt className='usr-login-btn-container'>
                    <button 
                        className='bias-usr-login-btn'
                        onClick={() => login(this, app)}>
                        登陆
                    </button>
                </dt>
            </div>     
        )
    }
}

export default withRouter(loginContainer);