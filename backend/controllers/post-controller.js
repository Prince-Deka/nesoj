const Post = require('../models/post-model');

// Create a new post
const createPost = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request file:', req.file);

  const { username, content } = req.body;
  const imageUrl = req.file ? req.file.location : null;

  if (!username || !content) {
    return res.status(400).json({ message: 'Username and content are required' });
  }

  try {
    const newPost = new Post({ username, content, image: imageUrl });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Failed to create post', error });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).json({ message: 'Failed to get posts', error });
  }
};

module.exports = { createPost, getPosts };

