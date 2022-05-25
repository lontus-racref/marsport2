const num_gen = require('./num_gen')
const { pad_num } = require('./global_counter_operations')
const int = require('../assets/global_counter.json')
const { write_globalPassports } = require('../services/global_passports_operations')

const get_idNumber = (planet, galaxy = '5537', auth = false) => {
    const format_num = (n, i) => {
        return `${i.series}-${galaxy}-${pad_num(i.cohort, 3)}-${n}`
    }

    let res = 
    {
        "p":planet,
        "id":format_num(num_gen(int.global_counter, int), int)
    }

    write_globalPassports(res)
    return res
}

module.exports = get_idNumber