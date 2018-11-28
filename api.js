const express = require('express')
const app = express()

const myList = [
    {
        id: 1,
        title: 'Pick up dry cleaning',
        priority: 1, // between 1-5 1 is most important
        body: "at Xian's dry cleaning store 12:30pm"
    },
    {
        id: 2,
        title: 'Do the shop',
        priority: 5, // between 1-5 1 is most important
        body: "Make sure to get eggs and bread"
    },
    {
        id: 3,
        title: 'Apply for loan',
        priority: 2, // between 1-5 1 is most important
        body: "Commbank loan manager - Dave 1pm"
    }
]

app.use(express.json()) //to access the body

// On root route send the following response
app.get('/', (req, res) => {
    res.send('Hello world, from To Do API') //usually html
})

app.get('/todo', (req, res) => {
    res.send(myList) //usually html
})

app.get('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id) //parseInt turns into integer
    const item = myList.find(p => p.id === id)
    if (!item) {
        return res.status(404).send('List item not found')
    }
    return res.send(item)
})

app.post('/todo', (req, res) => {
    // get params from req body
    const object = req.body
    const id = object.id
    const title = object.title
    const priority = object.priority
    const body = object.body
    // add to array
    const item = {
        id: id,
        title: title,
        priority: priority,
        body: body
    }
    myList.push(item)
    // send new poke as result
    return res.send(item)
})

app.put('/todo/:id', (req, res) => {
    // check the array for pokemon
    const id = parseInt(req.params.id) //parseInt turns into integer
    const item = myList.find(p => p.id === id)
    if (!item) {
        return res.status(404).send('List item not found')
    }
    // update the record
    const object = req.body
    const title = object.title
    const priority = object.priority
    const body = object.body
    item.title = title
    item.priority = priority
    item.body = body
    // send back updated pokemon as response
    return res.send(item)
})

app.delete('/todo/:id', (req, res) => {
    // check the array for pokemon
    const id = parseInt(req.params.id) //parseInt turns into integer
    const item = myList.find(p => p.id === id)
    if (!item) {
        return res.status(404).send('List item not found')
    }
    const index = myList.indexOf(item)
    myList.splice(index, 1)

    return res.send(item)
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})