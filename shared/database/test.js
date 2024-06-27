import mongoose from 'mongoose'
const { Schema, model } = mongoose

const testSchema = new Schema({
    playerName: String,
    score: Number,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [
        {
            user: String,
            content: String,
            votes: Number,
        },
    ],
})

const Test = model('Test', testSchema)
export default Test
