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
            alert(formComp.state.message.body)
            // formComp.props.history.push("/Inventory_Page")
        })
        .catch(error => {
            console.log(error);
        });
};
