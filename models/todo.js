import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  name: {type: String},
  description: {type: String},
  done: {type: String}
},{
  timestamps: true,
})

const Todo = mongoose.model('Todo', todoSchema)

export { Todo }
