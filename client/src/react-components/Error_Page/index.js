import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import red_error from '../../onion_icons/red-error.png'

class Error_Page extends React.Component {
   
    
    render(){
        return (
            <div className='error-page'>
                <PortalList/>
                    <div className='message-container'>
                        <div className='message-content'>
                            <div className='left-img'>
                                <img src={red_error} alt='error-icon'></img>
                            </div>
                            <div className='right-content'>
                                <h3> Error 404: 非常抱歉,您要找的页面不见了</h3>
                            </div>
                        </div>

                    </div>
            </div>    
        )
    }
}

export default withRouter(Error_Page);