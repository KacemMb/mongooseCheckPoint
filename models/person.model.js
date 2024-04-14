import mongoose from "mongoose";


const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
},
{
    timestamps: true
});

const person = mongoose.model('Person', personSchema);

export default person;