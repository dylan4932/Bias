import React from 'react';

import './index.css';
import Navigator from '../Navigator';


import {withRouter} from 'react-router' 

import Pagination from '@mui/material/Pagination';
import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';
import Forum from '../Forum';
import { getComments } from "../../actions/comment";

class Discussion extends React.Component {
    constructor(props) {
        super(props) 
        getComments(this);
    }
    state={
        commentsToShow:[]
    }
    
    render(){
        return (
            <div className='homepage'>
                <Navigator />
                <div class='adv'>
                    <Advertisment title='论坛'/>
                </div>
                <div class='main-content'> 
                    <Forum commentsToShow={this.state.commentsToShow} />
                    <Sidebar/>
                </div> 
                <Pagination></Pagination>
            </div>
            
        )
    }
}

export default withRouter( Discussion );