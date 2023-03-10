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
              <dt><h1>登陆</h1></dt>
              <dt>
               
                <TextField 
                    name="username" 
                    label="用户名" 
                    style={{ width: 300, height: 80 }} 
                    size="medium" 
                    type="text" 
                    variant="outlined" 
                    onChange={e => updateLoginForm(this, e.target)} 
                    required />

              </dt>
              <dt>
                
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

              <dt>
                    <button 
                        onClick={() => login(this, app)}>
                        登陆
                    </button>
                </dt>
            </div>     
        )
    }
}

export default withRouter(loginContainer);