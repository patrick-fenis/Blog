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

// // Route to Test DB
// router.get("/test", async (req, res) => {
//   try {
//     res.json(await Blog.find({}))
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// GET ROUTE - BLOG INDEX
router.get("/", async (req, res) => {
  try {
    res.json(await Blog.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})


// POST ROUTE - NEW BLOG
router.post("/new", async (req, res) => {
    try {
        res.json(await Blog.create(req.body));
    } catch (error) {
        res.status(400).json(error);
      }
  })

// GET ROUTE - BLOG SHOW
router.get("/:id", async (req, res) => {
  try {
    res.json(await Blog.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// DELETE ROUTE - DELETE BLOG
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Blog.findByIdAndRemove(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Put Route - Edit BLOG
router.put('/:id', async (req, res) => {
  const resourceId = req.params.id;
  const updatedData = req.body;

  try {
    res.json(await Blog.findByIdAndUpdate(resourceId, updatedData, {new: true}))
  } catch (error) {
    res.status(400).json(error)
  }
  // res.json({ message: 'Resource updated successfully', data: updatedData });
});

//


////////////////////////////////////////
/// Export Line
////////////////////////////////////////

module.exports = router