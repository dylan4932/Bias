export const checkSession = (app) => {
    const url = "/users/check-session";
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.user) {
                app.setState({ 
                    currentUser: json })
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A functon to update the login form state
export const updateLoginForm = (loginComp, field) => {
    const value = field.value;
    const name = field.name;

    loginComp.setState({
        [name]: value
    });
};

// A function to send a POST request with the user to be logged in
export const login = (loginComp, app, usr) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(loginComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            
            if (json.user !== undefined) {
                
                app.setState({ 
                    currentUser: json });
                
            }
            
        })
        .catch(error => {
            if(usr){
                app.props.push('./Bias_Page');
                alert('login successful');
            }else{
                alert('Invalid Email or password.')
            }
            
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = "/users/logout";

    console.log("action log out 1")
    fetch(url)
        .then(res => {   
            console.log("action log out 2")
            app.setState({
                currentUser: null,
                name: null,
                email: null,
                phone: null,
                hospital: null,
                department: null,
                company: null,
                favorite: [],
                createdTime: null,
                updatedTime: null,
                expireTime: null,
                message: { type: "", body: "" }
            });
            if(res.status === 200)
                // return res.json(200+"log out successful")
                console.log("logout successful")
                app.props.history.push("/Bias-home")
                window.location.reload();
        })
        .catch(error => {
            console.log("action log out 3")
            console.log(error);
        });
};

