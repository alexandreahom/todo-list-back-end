import { Todo } from '../models/todo.js'
import { Profile } from '../models/profile.js'

export function create (req,res){
  // console.log(re.)
  req.body.owner = req.params.id
  Todo.create(req.body)
  .then(todo =>{
    Profile.findById(req.params.id)
    .then(profile =>{
      // console.log(profile)
      profile.todos.push(todo)
      profile.save()
      .then(savvedProfile =>{
        Profile.findById(req.params.id)
        .populate({path:'todos',
          populate:{
            path:'owner',
            model:'Profile'
          }
        })
        .then(savedTodo=>{
          console.log(savedTodo)
          res.json(savedTodo)
        })
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
// export function update(req, res) {
//   console.log(req.params.id,"TEST")
//   Todo.findById(req.params.id)
//   .then(todo => {
//     // console.log(req.user.profile,"#!$@%")
//     if(todo.owner.equals(req.params.id)){
//       todo = req.body.todo
//       todo.save()
//       .then(()=>{
//         return res.json(todo)
//       })
//     }else{
//       return res.status(500).json({err:'Not Allowed'})
//     }
//     res.json(todo)
//   })
// }
export function deleted(req,res) {
  console.log(req.params.id)
  Todo.findById(req.params.id)
  .then(todo => {
    Profile.findById(req.user.profile)
    .then(profile => {
      profile.todos.remove(todo)
      profile.save()
      .then(savedProfile =>{
        Profile.findById(req.user.profile)
        .populate({
          path: 'todos',
          populate: {
            path: 'owner',
            model: 'Profile'
          }
        })
        .then(populatedProfile => {
          console.log(populatedProfile)
          res.json(populatedProfile)
        })
      })
    })  
  })
}