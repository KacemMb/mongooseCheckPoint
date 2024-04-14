import Person from '../models/person.model.js';

// Create and Save a new Person
export const create = async(req, res) => {
    console.log(req.body)
    const {name, age} = req.body;
    try{
        const person = new Person({name, age});
        await person.save();
        res.status(201).send("person created successfully");
    }catch(e){
        res.status(400).send("person not created");
    }
}
// Retrieve and return all persons from the database.
export const getPerson = async(req, res) => {
    try{
        const person = await Person.find();
        res.status(200).send(person);
    }catch(e){
        res.status(400).send("person not found");
    }
}
// Find a single person with a personId
export const getPersonById = async(req, res) => {
    const _id = req.params.id;
    try{
        const person = await Person.findOne({ _id });
        if(!person){
            return res.status(404).send("person not found");
        }
        res.status(200).send(person);
    }
    catch(e){
        res.status(400).send("person not found");
    }
}
// Update a person identified by the personId in the request
export const updatePerson = async(req, res) => {
    const _id = req.params.id;
    const {name, age} = req.body;
    try{
        const person = await Person.findOneAndUpdate({ _id }, { name, age }, { new: true });
        if(!person){
            return res.status(404).send("person not found");
        }
        res.status(200).send('person updated successfully');
    }
    catch(e){
        res.status(400).send("person not updated");
    }
}
// Delete a person with the specified personId in the request
export const deletePerson = async(req, res) => {
    const _id = req.params.id;
    try{
        const person = await Person.findOneAndDelete({ _id });
        if(!person){
            return res.status(404).send("person not found");
        }
        res.status(200).send('person deleted successfully');
    }
    catch(e){
        res.status(400).send("person not deleted");
    }
}
//delete all persons with the specified age
export const deleteByAge = async(req, res) => {
    const age = req.params.age;
    try{
        const person = await Person.deleteMany({ age });
        if(!person){
            return res.status(404).send("person not found");
        }
        res.status(200).send('person deleted successfully');
    }
    catch(e){
        res.status(400).send("person not deleted");
    }
}
//create many persons
export const createMany = async(req, res) => {
    const persons = req.body;
    try{
        await Person.insertMany(persons);
        res.status(201).send("persons created successfully");
    }catch(e){
        res.status(400).send("persons not created");
    }
}
// Update a person identified by the personId with classic method : find and save
export const classicUpdate = async(req, res) => {
    const _id = req.params.id;
    const {name, age} = req.body;
    try{
        const person = await Person.findOne({ _id });
        if(!person){
            return res.status(404).send("person not found");
        }
        person.name = name;
        person.age = age;
        await person.save();
        res.status(200).send('person updated successfully');
    }
    catch(e){
        res.status(400).send("person not updated");
    }
}