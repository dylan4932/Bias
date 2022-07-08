import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Portal extends React.Component {
    render(){
        return (
            <div className='homepage'>
                <div className='banner'>
                    <h1>偏倚树</h1>
                </div>
                <div className='menu'>
                    <list className='menu_list'>
                        <li>主页</li>
                        <li>偏倚</li>
                        <li>论坛</li>
                        <li>联系</li>
                        <li>关于我们</li>
                    </list>
                </div>
                <div className='adv'>
                    
                </div>
            </div>
            
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portal />)