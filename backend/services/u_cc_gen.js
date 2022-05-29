const axios = require('axios')
const num_gen = require('./num_gen')

const get_idNumber = (planet, galaxy = '5537', auth = false) => {
    const format_num = (n, i) => {
        return `${i.series}-${galaxy}-${pad_num(i.cohort, 3)}-${n}`
    }

    let res = 
    {
        "p":planet,
        "id":format_num(num_gen(int.global_counter, int), int)
    }

    return res
}

module.exports = get_idNumber