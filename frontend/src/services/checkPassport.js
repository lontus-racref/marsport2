const checkPassport = async props => {
    let result = ''

    await fetch(`http://localhost:5000/${ props }`)
        .then(data => {
            return data.json()
        }).then(data => {
            if(data.length > 0) result = data[0].id
        })

    return result
}

export default checkPassport