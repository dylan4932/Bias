import React from 'react';

import './index.css';

import BiasList from '../BiasList';
import {withRouter} from 'react-router' 
import { getBiasInfo, getBiasItems } from '../../actions/bias';

import Sidebar from '../Sidebar';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Footer from '../footer';


class Bias extends React.Component {
    
    constructor(props) {
        super(props);
        getBiasInfo(this, props.location.pathname);
        getBiasItems(this);
    }
    state = {
        bias: {},
        biases: []
    }
    
    render(){
        const { app, usr } = this.props;
        return (
            <div className='bias-main-homepage'>
                <div className='bias-header'>
                    <BiasList app={app} usr={usr}/>  
                </div>
                <div className='bias-main-content-container'> 
                    <div className='bias-main-content'>
                        <Box
                            
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                m: 1,
                                width: '100%'
                                },
                            }}>
                            <Paper elevation={0} >
                                <p className='bias-paper-name-title'>
                                    {this.state.bias.name}
                                </p>
                                <p className='bias-paper-name-subtitle'>
                                    {this.state.bias.name_en}
                                </p>
                            </Paper>
                            <Paper elevation={0}>
                                <p className='bias-paper-block-title'>Definition (定义)</p>
                                <p className='bias-paper-block-subtitle'>
                                    {this.state.bias.definition}
                                </p>
                            </Paper>
                            <Paper elevation={0}>
                                <p className='bias-paper-block-title'>Background (背景)</p>
                                <p className='bias-paper-block-subtitle'>
                                    {this.state.bias.background}
                                </p>
                            </Paper>
                            <Paper elevation={0}>
                                <p className='bias-paper-block-title'>Example (示例)</p>
                                <p className='bias-paper-block-subtitle'>
                                    {this.state.bias.example}
                                </p>
                            </Paper>
                            <Paper elevation={0}>
                                <p className='bias-paper-block-title'>Impact (影响)</p>
                                <p className='bias-paper-block-subtitle'>
                                    {this.state.bias.impact}
                                </p>
                            </Paper>
                            <Paper elevation={0}>
                                <p className='bias-paper-block-title'>Prevent steps (控制策略)</p>
                                <p className='bias-paper-block-subtitle'>
                                    {this.state.bias.prevent}
                                </p>
                            </Paper>
                            <Paper elevation={0}>
                                <p className='bias-paper-block-title'>Sources (相关引用)</p>
                                <p className='bias-paper-block-subtitle'>
                                    {this.state.bias.sources}
                                </p>
                            </Paper>
                            <Paper elevation={0}>
                                <p className='bias-paper-block-title'>More（更多参考）</p>
                                <p className='bias-paper-block-subtitle'>
                                    {this.state.bias.pubmed}
                                </p>
                            </Paper>
                        </Box>
                        <div className='bias-main-content-border'>
                            <p>Bias Dictionari+®</p>
                        </div>
                    </div> 
                    <Sidebar biases={this.state.biases}/>
                </div> 
                <Footer/>
            </div>
            
        )
    }
}

export default withRouter(Bias);