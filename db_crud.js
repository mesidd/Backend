import express from 'express';

import users from './MOCK_DATA.json' with {type : 'json'}

const PORT = 8000

const app = express()

import mongoose from 'mongoose'

app.use(express.urlencoded({extended: false})) // Important

mongoose.connect("mongodb://127.0.0.1:27017/practice")
.then(()=> {console.log("MongoDB connected successfully !")})
.catch((err)=> {console.log("Connected Successfully: ",err)})

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required : true
  },
  lname: {
    type: String
  },
  email: { 
    type: String,
    required: true,
  }

},{timestamps: true})

const User = mongoose.model("User", userSchema);

app.post('/create', async (req,res) => {

const body = req.body;

const result = await User.create({
    fname: body.firstName,
    lname: body.lastName,
    email: body.Email
  })
  console.log(result);

  return res.status(201).json({msg : "Success"});
})

app.get('/',(req, res)=>{
  res.json(users);
})

app.get('/users', async (req,res) => {
  const allUser = await User.find({});
  const html = `
  <ul>
  ${allUser.map((user) => `<l><h2>${user.fname}: ${user.email}</h2></l><br>`).join(" ")}
  </ul>`
  res.send(html);
})

app.get('/api/users', async (req,res)=> {
  const allUser = await User.find({});
  console.log(allUser);
  res.json(allUser);
})

app.get('/api/users/:id',async (req,res) => {
  const allUser = await User.find({});
  const obj = allUser.filter((x) => x.id === req.params.id)
  console.log(obj);
  res.json(obj);
})

// Patch
app.patch('/api/users/:id', async (req,res) => { // never forger /
  await User.findByIdAndUpdate(req.params.id,{fname: "Rakul"});
  return res.json({status: "Success"})
})


// Delete
app.delete('/api/users/:id', async(req,res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({status: "Success"})
})

app.listen(PORT, ()=> {
  console.log("Server started at: ",PORT);
})
