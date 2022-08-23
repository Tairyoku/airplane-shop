const mongoose = require('mongoose');

const planeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    planeImage: {
        type: String,
        required: true
    },
});

//так будет выглядеть в базе элемент Plane, его тип данных это planeSchema
module.exports = mongoose.model("Plane", planeSchema);