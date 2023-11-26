import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './react-components/BiasHome';
import BiasLogin from './react-components/Login_Page'
import Bias from './react-components/Bias';
import BiasPage from './react-components/Bias_Page';
import Discussion from './react-components/Discussion_Page';
import Contact from './react-components/Contact_Page';
import About from './react-components/About_Page';

// import Onion from './react-components/Onion_Page';
import Researcher from './react-components/Researcher_Page';
import Communicate from './react-components/Communicate_Page';
import Education from './react-components/Education_Page';
import Demo from './react-components/Demo_Page';
import CatalyPlan from './react-components/Cataly_Plan_Page';
import Plan from './react-components/Plan_Page';
import ExperiencePlan from './react-components/Experience_Page';
import Story from './react-components/Story';
import Error from './react-components/Error_Page';
import Portal from './react-components/Portal_page';
import { checkSession } from "./actions/user";
import ProfilePage from './react-components/Profile_Page';

class App extends React.Component {
    constructor(props) {
        super(props);
        checkSession(this); // sees if a user is logged in.
    }
    state = {
        currentUser: null,       
        message: { type: "", body: "" }
    }

    render() {
        const { currentUser } = this.state
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path='/profile' render={props =>
                        (!currentUser ? <BiasLogin {...props} app={this} usr={currentUser}/> : 
                        <ProfilePage {...props} app={this} usr={currentUser}/>)} />  

                    <Route exact path='/bias-login' render={props => 
                        (!currentUser ? <BiasLogin {...props} app={this} usr={currentUser}/> : 
                        <ProfilePage {...props} app={this} usr={currentUser}/>)} />   

                    <Route exact path={'/'} render={props => 
                        (<Portal {...props} app={this}/>)}/>
                    {/* <Route exact path='/Onion-intro' render={props => 
                        (<Onion {...props} app={this}/>)}/> */}
                    <Route exact path='/Researcher' render={props => 
                        (<Researcher {...props} app={this}/>)}/>
                    <Route exact path='/Communicate' render={props => 
                        (<Communicate {...props} app={this}/>)}/>
                    <Route exact path='/Education' render={props => 
                        (<Education {...props} app={this}/>)}/>
                    <Route exact path='/Demo' render={props => 
                        (<Demo {...props} app={this}/>)}/>
                    <Route exact path='/Plan' render={props => 
                        (<Plan {...props} app={this}/>)}/>
                    <Route exact path='/Cataly-Plan' render={props => 
                        (<CatalyPlan {...props} app={this}/>)}/>
                    <Route exact path='/Experience-Plan' render={props => 
                        (<ExperiencePlan {...props} app={this}/>)}/>
                    <Route exact path='/success-story' render={props => 
                        (<Story {...props} app={this}/>)}/>
                    <Route exact path='/bias-home' render={props => 
                        (<Home {...props} app={this} usr={currentUser}/>)}/>


                    <Route exact path='/Bias_Page' render={props => 
                        (!currentUser ? <BiasLogin {...props} app={this}/> : 
                        <BiasPage {...props} app={this} usr={currentUser}/>)}/>

                    <Route exact path='/Bias/:id' render={props => 
                        (!currentUser ? <BiasLogin {...props} app={this}/> : 
                        <Bias {...props} app={this} usr={currentUser}/>)}/>
                    
                    
                    <Route exact path='/Discussion_Page' render={props =>
                        (!currentUser ? <BiasLogin {...props} app={this}/> : 
                        <Discussion {...props} app={this} usr={currentUser}/>)} />   

                      
                    <Route exact path='/Contact-us' render={props =>
                        (<Contact {...props} app={this} usr={currentUser}/>)} />   
                    <Route exact path='/About_Page' render={props =>
                        (<About {...props} app={this} usr={currentUser}/>)} /> 
                    <Route render={() => 
                        (<Error  app={this} />)} /> 
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;