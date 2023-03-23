////////////////////////////////////////
/// Router Setup
////////////////////////////////////////

const express = require('express')
const router = express.Router()
const BlogSchema = require('../models/blog')


////////////////////////////////////////
/// Routes
////////////////////////////////////////

router.get('/seed', async (req, res) => {
    const blogPosts = [
        {
            title: 'Test',
            description: 'Test line of text',
            image: 'URL Goes here'
        },
        {
          title: 'Test2',
          description: 'Test line of text number 3',
          image: 'URL Goes here 2'
        }
    ]
  
    try {
      const seedItems = await BlogSchema.create(blogPosts)
      res.send(seedItems)
    } catch (err) {
      res.send(err.message)
    }
  })


router.get("/", (req, res) => {
    res.send("Hello, World!")
  })


  // GET - BLOG INDEX
// router.get("/blogs", (req, res) => {
//   // boilerplate for blogs
//   res.send("All of the blogs!")
// })

// router.get("/people", async (req, res) => {
//   try {
//     res.json(await )
//   }
// })



////////////////////////////////////////
/// Export Line
////////////////////////////////////////


module.exports = router