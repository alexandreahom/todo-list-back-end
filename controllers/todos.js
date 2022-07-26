import { Todo } from '../models/todo.js'
import { Profile } from '../models/profile.js'

export function create (req,res){
  Todo.create(req.body)
  .then(todo =>{
    Profile.findById(req.params.id)
    .populate('todos')
    .then(profile =>{
      console.log(profile)
      profile.todos.push(todo)
      profile.save()
      .then(savedTodo=>{
        console.log(savedTodo)
        res.json(savedTodo)
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}
export function index(req, res) {
  Todo.find({})
  .populate('name')
  .then(todo => {
    res.json(todo)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}
export function show(req, res) {
  Todo.findById(req.params.id)
  .then(todo => {
    res.json(todo)
  })
}
export function update(req, res) {
  Todo.findById(req.params.id)
  .then(todo => {
    if(todo.author.equals(req.user.profile)){
      todo = req.body.todo
      todo.save()
      .then(()=>{
        return res.json(todo)
      })
    }else{
      return res.status(500).json({err:'Not Allowed'})
    }
    res.json(todo)
  })
}