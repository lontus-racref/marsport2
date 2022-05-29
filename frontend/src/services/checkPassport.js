const checkPassport = async props => {
    try {
        const result = await fetch(`${ process.env.REACT_APP_DB_URL }/${ props }`, {
            method: "GET",
            mode: "cors"
        })
            .then(data => data.json())
            .then(data => {
               return data.id
            })

        return result
    } catch(e) {
        console.log(e)
    }
}

export default checkPassport