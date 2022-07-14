import React from 'react';

import './index.css';
import Navigator from '../Navigator';
import Content from '../Main_Content';

import {withRouter} from 'react-router' 
import { getBiasItems } from "../../actions/bias";
import Pagination from '@mui/material/Pagination';



class Bias extends React.Component {
    constructor(props) {
        super(props)
        getBiasItems(this)
    }
    state = {
        bias: []
    }

    
    
    render(){
        // const flag = 'home';
        return (
            <div className='homepage'>
                <div className='banner'>
                    <h1>偏倚树</h1>
                </div>
                <Navigator/>
                <Content height = '1200px' bias = { this.state.bias }/>
                <Pagination sx={{margin: '10px 38%'}} count={5} variant="outlined" color="primary" />
                <button>
                    <span></span>
                </button>

            </div>
            
        )
    }
}

export default withRouter(Bias);