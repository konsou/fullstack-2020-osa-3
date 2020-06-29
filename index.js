if (process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv')
    dotenv.config()
}

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')
const ObjectId = require('mongodb').ObjectID;

morgan.token('body', request => {
    if (Object.keys(request.body).length > 0) {
        return JSON.stringify(request.body)
    } else {
        return ""
    }
})

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'Unknown endpoint' })
}

app.use(express.json())
app.use(morgan(':method :url :status :body :res[content-length] - :response-time ms'))
app.use(cors())
app.use(express.static('build'))


app.get('/info', (request, response) => {
    //console.log(`GET info`)
    Person.countDocuments({})
        .then((count) => {
            const body = `<p>Phonebook has ${count} persons</p>
            <p>${new Date().toString()}</p>`
            response.send(body)
        })
    
})

app.get('/api/persons', (request, response) => {
    // console.log(`GET persons`)
    Person.find({})
        .then((persons) => {
            response.json(persons)
        })
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    //console.log(`GET person ${id}`)
    Person.findById(id)
        .then((person) => {
            console.log(person)
            response.json(person)            
        })
        .catch(error =>{
            console.log('ERROR')
            console.log(error)
            response.status(404).end()
        })
})

app.post('/api/persons', (request, response) => {
    //console.log(`POST person`)
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'Missing name'
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'Missing number'
        })
    }

    console.log('checking for duplicates...')

    // check for duplicate
    Person.findOne({ name: body.name })
        .then(duplicatePerson =>{
            if (duplicatePerson !== null) {
                console.log(`${body.name} already exists`)
                console.log(duplicatePerson)
                return response.status(400).json({
                    error: `${body.name} already exists - name must be unique`
                })
            } else {
                // no duplicate found
                console.log('duplicate check passed')
                const person = new Person({
                    name: body.name,
                    number: body.number
                })
            
                person.save().then(savedPerson => {
                    console.log('saved', savedPerson.name)
                    response.json(savedPerson)
                })  
                .catch(error => {
                    console.log('error saving person', error)
                })
            }
        })
        .catch(err => {
            console.log('error checking for duplicates', err)
        })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    // console.log(`DELETE person ${id}`)
    Person.deleteOne({ "_id": ObjectId(id) })
        .then(response2 => {
            console.log(`deleted ${response2.deletedCount} persons`)
            response2.deletedCount
                ? response.status(204).send()
                : response.status(404).send()
        })
        .catch(error => {
            console.log('error deleting:', error)
        })
})


app.use(unknownEndpoint)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})