import React from 'react';

import './index.css';


import {withRouter} from 'react-router' 
import { getBiasInfo } from "../../actions/bias";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';


class BiasPaper extends React.Component {
    constructor(props) {
        super(props)
        getBiasInfo(this, props.location.pathname)      
    }
    
    state={
        bias:{}
    }
    
    render(){
        return (
            <div className='homepage'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        
                        },
                    }}
                >
                    <Paper
                        sx={{
                            paddingLeft: 5
                        }} 
                        elvation={3}>
                        <h1>
                            {this.state.bias.name}
                        </h1>
                    </Paper>
                        <h2>定义：</h2>
                        <p>
                            {this.state.bias.definition}
                        </p>
                    <Paper />
                    <Paper elevation={0}>
                        <h2>背景：</h2>
                        <p>
                            {this.state.bias.background}
                        </p>
                    </Paper>
                    <Paper elevation={0}>
                        <h2>示例：</h2>
                        <p>
                            {this.state.bias.example}
                        </p>
                    </Paper>
                    <Paper elevation={0}>
                        <h2>影响：</h2>
                        <p>
                            {this.state.bias.impact}
                        </p>
                    </Paper>
                    <Paper elevation={0}>
                        <h2>预防措施：</h2>
                        <p>
                            {this.state.bias.prevent}
                        </p>
                    </Paper>
                    <Paper elevation={0}>
                        <h2>出处：</h2>
                        <p>
                            {this.state.bias.sources}
                        </p>
                    </Paper>
                    <Paper elevation={0}>
                        <h2>更多参考：</h2>
                        <p>
                            {this.state.bias.pubmed}
                        </p>
                    </Paper>
                
                </Box>
            </div>  
        )
    }
}

export default withRouter(BiasPaper);