import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: {type: String},
  todos: [{type: mongoose.Schema.Types.ObjectId, ref: "Todo"}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
