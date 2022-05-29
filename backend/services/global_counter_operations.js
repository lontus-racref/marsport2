//--pad number (n) with abritrary nunmber of leading zeros (places) and return string
const pad_num = (n, places) => {
    var zero = places - n.toString().length + 1

    return Array(+(zero > 0 && zero)).join('0') + n
}

module.exports = { 
    pad_num
}