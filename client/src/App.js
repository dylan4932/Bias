import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './react-components/Home';
import Bias from './react-components/Bias';
import BiasList from './react-components/Bias_Page';
import Discussion from './react-components/Discussion_Page';
import Contact from './react-components/Contact_Page';
import About from './react-components/About_Page';

import Onion from './react-components/Onion_Page';
import Researcher from './react-components/Researcher_Page';
import Communicate from './react-components/Communicate_Page';
import Education from './react-components/Education_Page';
import Demo from './react-components/Demo_Page';
import Plan from './react-components/Plan_Page';
import Security from './react-components/Security';
import Error from './react-components/Error_Page';
import Portal from './react-components/Portal_page';

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
                            (<Portal {...props} app={this}/>)}/>
                        <Route exact path='/Bias-home?id=100027816925' render={props => 
                            (<Home {...props} app={this}/>)}/>
                        <Route exact path='/Onion-intro?id=100027816925' render={props => 
                            (<Onion {...props} app={this}/>)}/>
                        <Route exact path='/Researcher?id=100027816925' render={props => 
                            (<Researcher {...props} app={this}/>)}/>
                        <Route exact path='/Communicate?id=100027816925' render={props => 
                            (<Communicate {...props} app={this}/>)}/>
                        <Route exact path='/Education?id=100027816925' render={props => 
                            (<Education {...props} app={this}/>)}/>
                        <Route exact path='/Demo?id=100027816925' render={props => 
                            (<Demo {...props} app={this}/>)}/>
                        <Route exact path='/Plan?id=100027816925' render={props => 
                            (<Plan {...props} app={this}/>)}/>
                        <Route exact path='/Data-Security?id=100027816925' render={props => 
                            (<Security {...props} app={this}/>)}/>

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
                        <Route render={() => 
                            (<Error  app={this} />)} /> 
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;