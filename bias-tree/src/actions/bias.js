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
            home.setState({ bias: json.biasToShow })
        })
        .catch(error => {
            console.log(error)
        });

}
