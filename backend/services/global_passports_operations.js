const fs = require('fs')
const json = require('../assets/global_passports.json')

const search_globalPassports = data => {
    if(!data) return false
    console.log(data.p)
    return json.filter(json => json.p === data.p)
}

const write_globalPassports = user => {
    if(!user) return false
    
    fs.readFile('./assets/global_passports.json',function(err,data){
        if(err) throw err;
        var parseJson = JSON.parse(data);
        parseJson.push(user)
        fs.writeFileSync('./assets/global_passports.json',JSON.stringify(parseJson),function(err){
            if(err) throw err;
        })
    })
}

module.exports = {
    search_globalPassports,
    write_globalPassports
}