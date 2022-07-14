import React from 'react';
import { Link } from "react-router-dom";

import './index.css';
import {withRouter} from 'react-router' 
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { purple } from '@mui/material/colors';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '7px 12px',
    // border: '1px solid',
    color: 'white',
    lineHeight: 1.3,
    backgroundColor: '#ADACD9',
    borderColor: '#0063cc',
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
    '&:hover': {
      backgroundColor: purple[500],
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: '0 0 0 0.2rem rgba(255, 255, 255, 0.5)',
      backgroundColor: purple[500],
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(255, 255, 255, 0.5)',
      backgroundColor: purple[500],
    },
  });
class Navigator extends React.Component {
   
    
    render(){
        return (
            <div className='menu'>
                <list className='menu_list'>
                    
                    <li>
                    <BootstrapButton
                        component={Link} to="./../"
                        color='secondary'>

                        主页
                    </BootstrapButton>
                    </li>
                    <li>
                        <BootstrapButton
                            
                            component={Link} to="../Bias_Page"
                            color='secondary'>
                        偏倚
                        </BootstrapButton>
                    </li>
                    
                    <li>
                        <BootstrapButton
                            component={Link} to="../Bias_Page"
                            color='secondary'>
                        论坛
                        </BootstrapButton>
                    </li>
                    <li>
                        <BootstrapButton
                            component={Link} to="../Bias_Page"
                            color='secondary'>
                        联系我们
                        </BootstrapButton>
                    </li>
                    <li>
                        <BootstrapButton
                            component={Link} to="../Bias_Page"
                            color='secondary'>
                        关于我们
                        </BootstrapButton>
                    </li>
                </list>
            </div>  
        )
    }
}

export default withRouter(Navigator);