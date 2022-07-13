function getBiasItems(home) {
    const url = "/api/myItems";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                console.log('Empty inventory')
            }
        })
        .then(json => {
            home.setState({ bias: json.biasToShow })
        })
        .catch(error => {
            console.log(error)
        }).readAsBinaryString(file)

}

getBiasItems()