import { Todo } from '../models/todo.js'
import { Profile } from '../models/profile.js'


export function create(req, res) {
  req.body.owner = req.user.profile
  Todo.create(req.body)
  .then(todo => {
    Todo.findById(todo._id)
    .populate('owner')
    .then(populatedTodo => {
      res.json(populatedTodo)
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


export function deleted(req, res) {
  Todo.findById(req.params.id)
  .then(todo => {
      Todo.findByIdAndDelete(todo._id)
      .then(deletedTodo => {
        res.json(deletedTodo)
      })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}