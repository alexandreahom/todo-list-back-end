import mongoose from 'mongoose'
const Schema =   mongoose.Schema
const todoSchema =  new Schema({
  owner:{type: String},
  name: {type: String},
  description: {type: String},
},{
  timestamps: true,
})

const Todo = mongoose.model('Todo', todoSchema)

export { Todo }
