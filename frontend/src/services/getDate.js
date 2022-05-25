const getFormattedDate = () => {
    var date = new Date()
    
    return date.toLocaleDateString().replace('/','-').replace('/','-')
}

export default getFormattedDate