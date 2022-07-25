import { Todo } from '../models/todo.js'
export function create (req,res){
  req.body.author = req.user.profile
  Todo.create(req.body)
  .then(todo =>{
    Todo.findById(todo._id)
    .populate('author')
    .then(populatedTodo=>{
      res.json(populatedTodo)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}
