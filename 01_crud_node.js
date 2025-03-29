import express from 'express';

import users from './MOCK_DATA.json' with { type: "json"}

import fs from 'fs'

const app = express();

const PORT = 8000

app.get('/',(req,res)=> {
  res.end("Hey Welcome to this website!")
})

//users - data
app.get('/users', (req,res)=> {
  const html = `
  <ul>
  ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
  </ul>
  `
  res.send(html)
})

//api - json
app.get('/api/users', (req,res) => {
  res.json(users)
})


// < ------------------------------ !! --------------------------------->

// DYNAMIC PATH

// GET
app.get('/api/users/:id', (req,res)=> {
  const id = Number(req.params.id);
  const user = users.find((user) =>  user.id === id)
  res.json(user);
})


//POST 
// app.post('/api/users/:id', (req,res)=> {
//   //New users
//   return res.json({status: "pending"})
// })


//PATCH
// app.patch('/api/users/:id',(req,res)=> {
//   return res.json(users)
// })


//DELETE
// app.delete('/api/users/:id',(req,res)=> {
//   return res.json(users)
// })

//ALTERNATIVE

// app
// .route('/api/users/:id')
// .get(
//   (req,res) => {
//     //   const id = Number(req.params.id);
//     //   const user = users.find((user) =>  user.id === id)
//     //   return res.json(user);
//     }
// )
// .delete(
//   (req,res)=> {
//     // res.
//   }
// )


app.use(express.urlencoded({extended: false}))  //Middleware

// app.post('/api/users', (req,res)=> {
//   const body = req.body;
//   users.push({
//     id: Number(users.length + 1),
//     first_name: body.first_name,
//     last_name: body.last_name,
//     email: body.email,
//     job_title: body.job_title
//   })
//   return res.json({state: 'pending'})
// })

// app.post('/api/users',(req,res) => {
//   const body = req.body
//   req.body.id = Number(req.body.id)
//   users.push(body)
//   return res.json({status : 'pending'})
// })


app.post('/api/users', (req,res)=> {
  const body = req.body;
  users.push({id:users.length+1 ,...body });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data)=>{
    return res.json({state: 'success', id: users.length })
  })
})

// Filter
// app.patch('/api/users', (req,res)=> {
//   const change = "Mohan"; // user - 3
//   const obj = (users.filter((x) => x.id== 3))

//   console.log(obj);

//   obj[0].first_name = change;
//   res.end("Changed")
// })


// Find
app.patch('/api/users', (req,res)=> {
  const change = "Shyam";
  const obj = users.find((x) => x.id == 88)
  obj.first_name = change;

  res.send({
    before : obj,
    after : users[87]
  })
})


// Delete
app.delete('/api/users', (req,res) => {
  const id = 2;
  users.splice(id,1);
  res.send('Deleted');
})


app.listen(PORT,()=> {
  console.log("Server started at ", PORT);
})
