const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    p: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('marsport-users', dataSchema)