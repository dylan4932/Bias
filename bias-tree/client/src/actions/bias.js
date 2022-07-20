export const btn_activator = () => {
    // let btn = document.querySelector('#btn')
    let sidebar = document.querySelector('.sidebar')
    // let searchBtn = document.querySelector('#btn')

    sidebar.classList.toggle('active');
}

export const getBiasItems = (home) => {
    const url = "/api/bias";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                console.log('Error loading bias.')
            }
        })
        .then(json => {
            home.setState({ bias: json.items })
        })
        .catch(error => {
            console.log(error)
        });
    // const jsonData = require('./bias.json');
    // console.log('1')

}

export const getBiasInfo = (comp, path) => {

    const id = path.substring(path.lastIndexOf('/') + 1)
    const url = "/bias/"+id
    fetch(url)
        .then(res => {
             if (res.status === 200) {
                 return res.json();
             } else {
                 console.log('Error Loading item');
             }
         })
         .then(json => {
             comp.setState({ bias: json.bias });
         })
         .catch(error => {
             console.log(error);
         });
 };




