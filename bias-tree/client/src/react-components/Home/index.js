import React from 'react';

import './index.css';
import Navigator from '../Navigator';
import Content from '../Main_Content'
import {withRouter} from 'react-router' 

class Home extends React.Component {
    // constructor(props) {
    //     super(props)

    // }
    
    render(){
        // const flag = 'home';
        return (
            <div className='homepage'>
                <div className='banner'>
                    <h1>偏倚树</h1>
                </div>
                <Navigator/>
                <Content />
                <div>
                    
                </div>
            </div>
            
        )
    }
}

export default withRouter(Home);