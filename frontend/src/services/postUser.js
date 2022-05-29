const postUser = async props => {
    try {    
        const response = await fetch( `${ process.env.REACT_APP_DB_URL }/getpassport`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(props)
        })
    } catch(e) {
        console.log(e)
    }
} 

export default postUser