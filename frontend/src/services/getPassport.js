const getPassport = async (url = '', data = {}) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
      })

      return response.json()
    } catch(e) {
      console.log(e)
    }
}

export default getPassport