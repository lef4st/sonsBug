const mongoose = require('mongoose');

const SomSchema = new mongoose.Schema({
    nome: {
        type: String,
        unique: true,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports =  mongoose.model('Som', SomSchema);