import Contact from "../models/contacts.model.js";

// Create a new contact
async function create(req, res) {
    try {
        const newObj = await Contact.create(req.body)
        res.json(newObj)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

// retrieve all contacts
async function getAll(req, res) {
    try {
        const allObjs = await Contact.find()
        res.json(allObjs)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

// retrieve a single contact by ID
async function getOne(req, res) {
    try {
        const foundObj = await Contact.findById(req.params.id)
        res.json(foundObj)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

// update a single contact by ID
async function updateOne(req, res) {
    try {
        const updatedObj = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        res.json(updatedObj)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

// delete a single contact by ID
async function deleteOne(req, res) {
    try {
        const deletedObj = await Contact.findByIdAndDelete(req.params.id)
        res.json(deletedObj)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

// exporting all controller's functions
export{ create, getAll, getOne, updateOne, deleteOne }