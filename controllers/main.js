////////////////////////////////////////
/// Router Setup
////////////////////////////////////////

const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')


////////////////////////////////////////
/// Routes
////////////////////////////////////////

// SEED ROUTE

// router.get('/seed', async (req, res) => {
//     const blogPosts = [
//         {
//             title: 'Test',
//             description: 'Test line of text',
//             image: 'URL Goes here'
//         },
//         {
//           title: 'Test2',
//           description: 'Test line of text number 3',
//           image: 'URL Goes here 2'
//         }
//     ]
  
//     try {
//       const seedItems = await Blog.create(blogPosts)
//       res.send(seedItems)
//     } catch (err) {
//       res.send(err.message)
//     }
//   })

// Route to Test DB
router.get("/test", async (req, res) => {
  try {
    res.json(await Blog.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

// GET - BLOG INDEX
router.get("/", async (req, res) => {
  try {
    res.json(await Blog.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

// NEW ROUTE
router.post("/post", async (req, res) => {
    try {
        res.json(await Blog.create(req.body));
    } catch (error) {
        res.status(400).json(error);
      }
  })

// GET - BLOG SHOW
router.get("/:id", async (req, res) => {
  try {
    res.json(await Blog.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})



////////////////////////////////////////
/// Export Line
////////////////////////////////////////


module.exports = router