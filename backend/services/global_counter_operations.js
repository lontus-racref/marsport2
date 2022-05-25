const int = require('../assets/global_counter.json')
const oracle = './assets/global_counter.json'
const fs = require('fs')

//--increment global counter and return next number
const increment_globalCounter = () => {
    //--check if counter and cohort is exhausted, increment series
    if(int.series === '' || (int.cohort === 999 && int.global_counter === 9999)) {
        increment_series(int.series)
    }

    //--check if cohort is exhausted, increment cohort
    if(int.cohort === 0 || int.global_counter === 9999) {
        increment_cohort()
    }

    int.global_counter++

    //--write new global_counter value
    fs.writeFile(oracle, JSON.stringify(int), function(err) { if(err) console.log(err) })

    return int.global_counter
}

//--increment cohort by one, reset counter
const increment_cohort = () => {
    int.cohort = int.cohort + 1
    int.global_counter = 0

    fs.writeFile(oracle, JSON.stringify(int), function(err) { if(err) console.log(err) })
}

//--increment series by one letter, reset cohort and global counter
const increment_series = el => {
    const alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const index = alph.indexOf(el)

    int.series = alph[index + 1]
    int.cohort = 1
    int.global_counter = 0

    fs.writeFile(oracle, JSON.stringify(int), function(err) { if(err) console.log(err) })
}

//--pad number (n) wiht abritrary nunmber of leading zeros (places) and return string
const pad_num = (n, places) => {
    var zero = places - n.toString().length + 1

    return Array(+(zero > 0 && zero)).join('0') + n
}

module.exports = { 
    increment_globalCounter,
    pad_num
}