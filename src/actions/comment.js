const checkEmpty = (form) =>{
    if(!form.state.comment) 
    {alert("请完成填写.")}
    return;
}

export const updateComment = (formComp, field) => {
    const value = field.value;
    const name = field.name;

    formComp.setState({
        [name]: value
    });
};

export const getComments = (home) => {
    const url = "/api/comments";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                console.log('Error loading bias.')
            }
        })
        .then(json => {
            home.setState({ commentsToShow: json.comments })
        })
        .catch(error => {
            console.log(error)
        });

}

export const addComment = (formComp) => {
    checkEmpty(formComp);
    const url = "/api/comment";

    const comment = formComp.state;

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(comment),
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
            alert(formComp.state.message.body);
            window.location.reload(true);
        })
        .catch(error => {
            console.log(error);
        });
};