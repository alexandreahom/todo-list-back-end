import mongoose from 'mongoose'
const Schema =   mongoose.Schema
const todoSchema =  new Schema({
  author:{type: Schema.Types.ObjectId, ref: "Profile"},
  name: {type: String},
  description: {type: String},
  done: {type: Boolean}
},{
  timestamps: true,
})

const Todo = mongoose.model('Todo', todoSchema)

export { Todo }
