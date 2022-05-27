const checkPassport = async props => {
    let result = ''

    await fetch(`${ process.env.REACT_APP_DB_URL }/${ props }`)
        .then(data => {
            return data.json()
        }).then(data => {
            if(data.length > 0) result = data[0].id
        })

    return result
}

export default checkPassport