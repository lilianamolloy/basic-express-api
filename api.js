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

app.listen(5000, () => {
    console.log('listening on port 5000')
})