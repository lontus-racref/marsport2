const { increment_globalCounter, pad_num } = require('./global_counter_operations')

//--get marsport number from global_counter.jjson, padn umber with appropriate zeros
const num_gen = (n, int) => {
    let res = increment_globalCounter()
    return pad_num(res, 4)
}

module.exports = num_gen