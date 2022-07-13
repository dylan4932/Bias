import React from 'react';
import ReactDOM from 'react-dom/client';
import './login.css';
import {FaUserCircle} from 'react-icons';

class Login extends React.Component{
    render () {
        return 
            <div href='#'>
                <FaUserCircle></FaUserCircle>
                登陆
            </div>

    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login />)

