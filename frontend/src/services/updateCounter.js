const updateCounter = async props => {
    const arr = props.split('-')
    const series = arr[0]
    const cohort = arr[2]
    const global_counter = arr[3]
    
    try {    
        const response = await fetch( `${ process.env.REACT_APP_DB_URL }/update/62915ce3bdb9cddb76fd5758`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "series": series,
                "cohort": cohort,
                "global_counter": global_counter
            })
        })
    } catch(e) {
        console.log(e)
    }
} 


export default updateCounter