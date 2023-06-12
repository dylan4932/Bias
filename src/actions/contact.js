export const updateContact = (formComp, field) => {
    const value = field.value;
    const name = field.name;

    formComp.setState({
        [name]: value
    });
};

const checkEmpty = (form) =>{
    if(!form.state.title || !form.state.explain || !form.state.background
        || !form.state.name || !form.state.email) 
    {alert("请完成填写.")}
    return;
}

// const emptyInput = () =>{
//     const title = document.getElementById('title-inpt');
//     title.value = '';

//     const explain = document.getElementById('explain-inpt');
//     explain.value = '';

//     const background = document.getElementById('background-input');
//     background.value = '';

//     const name = document.getElementById('name-inpt');
//     name.value = '';

//     const email = document.getElementById('email-input');
//     email.value = '';

//     const address = document.getElementById('address-input');
//     address.value = '';
// }

export const addContact = (formComp) => {
    checkEmpty(formComp);
    const url = "/api/contact";

    const item = formComp.state

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(item),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(function (res) {
            console.log(res.status)
            if (res.status === 200) {
                formComp.setState({
                    message: {
                        body: "感谢您的提交",
                        type: "success",
                    },
                });
            } else {
                formComp.setState({
                    message: {
                        body: "Error: 未能成功提交.",
                        type: "error",
                    }
                });
            }
            formComp.setState({
                name: '',
                email: '',
                address: ''
            })
            alert('感谢您的提交！') 
            // formComp.props.history.push("/Inventory_Page")
        })
        .catch(error => {
            console.log(error);
        });
};

