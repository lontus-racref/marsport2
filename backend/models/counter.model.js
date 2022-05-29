const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    series: {
        required: true,
        type: String
    },
    cohort: {
        required: true,
        type: Number
    },
    global_counter: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('marsport-counter', dataSchema)