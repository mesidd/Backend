require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) => {
  res.send("instawalah")
})

app.get('/login',(req,res) => {
  res.send('<h1>Please login at your website </h1>');
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/youtube', (req,res) => {
  res.send("Sid")
})

app.get('/web', (req,res) => {
  res.send("Hello to the website")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${3000}`)
})
