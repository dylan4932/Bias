import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './react-components/Home';
import Bias from './react-components/Bias';
import BiasList from './react-components/Bias_Page';
import Discussion from './react-components/Discussion_Page';
import Contact from './react-components/Contact_Page';
import About from './react-components/About_Page';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={props => 
                            (<Home {...props} app={this}/>)}/>
                        <Route exact path='/Bias_Page' render={props => 
                            (<BiasList {...props} app={this}/>)}/>
                        <Route exact path='/Bias/:id' render={props => 
                            (<Bias {...props} app={this}/>)}/>
                        <Route exact path='/Discussion_Page' render={props =>
                            (<Discussion {...props} app={this} />)} />   
                        <Route exact path='/Contact_Page' render={props =>
                            (<Contact {...props} app={this} />)} />   
                        <Route exact path='/About_Page' render={props =>
                            (<About {...props} app={this} />)} /> 
                        <Route render={() => <div>404: 非常抱歉,您要找的页面不见了</div>} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;