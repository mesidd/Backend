import express from 'express';

const app = express()

import fs from 'fs'

import users from './MOCK_DATA.json' with {type : 'json'}

const PORT = 8000

// app.get('/', (req,res)=> {
//   res.end("Welcome")
// })

app.use((req,res,next)=> {
  fs.appendFile('log.txt', `\n${Date.now()}`, (err, data)=> { //
  })

  console.log("Hello from Middleware 1")
  req.myName = "Message from 1"
  next();
})

app.use((req,res,next)=> {
  console.log(req.myName)
  next();
  // return res.end("Hey middle ware 2")
})

app.get('/api/users',(req, res)=> {
  res.setHeader("X-name","sanyal");    // HeaderSetting
  return res.status(201).json(users);  // Status
})

app.listen(PORT,()=> {
  console.log("Server running on ",PORT)
})
