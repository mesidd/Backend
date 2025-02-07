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
const githubData = {

    "login": "mesidd",
    "id": 160341360,
    "node_id": "U_kgDOCY6dcA",
    "avatar_url": "https://avatars.githubusercontent.com/u/160341360?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mesidd",
    "html_url": "https://github.com/mesidd",
    "followers_url": "https://api.github.com/users/mesidd/followers",
    "following_url": "https://api.github.com/users/mesidd/following{/other_user}",
    "gists_url": "https://api.github.com/users/mesidd/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mesidd/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mesidd/subscriptions",
    "organizations_url": "https://api.github.com/users/mesidd/orgs",
    "repos_url": "https://api.github.com/users/mesidd/repos",
    "events_url": "https://api.github.com/users/mesidd/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mesidd/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Siddhartha Sharma",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Enjoy solving problems related to technology and Science. Enhancing skills to solve more problems.",
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 1,
    "following": 4,
    "created_at": "2024-02-17T16:31:49Z",
    "updated_at": "2024-12-04T10:42:11Z"
  
}

app.get('/youtube', (req,res) => {
  res.send("Sid")
})

app.get('/web', (req,res) => {
  res.send("Hello to the website")
})

app.get('/github', (req,res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${3000}`)
})
