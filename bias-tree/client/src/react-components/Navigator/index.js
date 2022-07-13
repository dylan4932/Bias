import React from 'react';

import './index.css';
import {withRouter} from 'react-router' 

class Navigator extends React.Component {
    // constructor(props) {
    //     super(props)

    // }
    
    render(){
        return (
            <div className='menu'>
                <list className='menu_list'>
                    <li href='#'>主页</li>
                    
                    <li href='#'>偏倚</li>
                    <li href='#'>论坛</li>
                    <li a href='#'>联系我们</li>
                    <li href='#'>关于</li>
                </list>
            </div>  
        )
    }
}

export default withRouter(Navigator);