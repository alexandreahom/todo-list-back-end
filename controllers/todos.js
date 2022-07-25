import { Todo } from '../models/todo.js'
export function create (req,res){
  Todo.create(req.body)
  .then(todo =>{
    res.json(todo)
  })
}
