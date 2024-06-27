import express from 'express'
import mongoose from 'mongoose'
import Test from './shared/database/test.js'

mongoose.connect('mongodb://admin:secret@localhost:27017/')

const game = await Test.create({
    title: 'Awesome Game!',
    slug: 'awesome-serie',
    published: true,
    content: 'This is the best series ever',
    tags: ['featured', 'announcement'],
})

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(game)
    res.send('Hello World! ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
