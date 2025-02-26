import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    allPosts
      ? res.status(200).json(allPosts)
      : res.status(404).json({ Message: "data unavailble at the moment" });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getOnePost = async (req, res) => {
  try {
    const onePost = await Post.findById(req.params.id);
    onePost
      ? res.status(200).json(onePost)
      : res.status(404).json({ message: "post not found" });
  } catch (error) {
    res.status(400).json({ message: "stop using the url !!" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findById(req.params.id);
    if (!Post) {
      return res.status(404).json({ message: "post not availble" });
    }
    updatedPost.reviwes.push(req.body.reviwes);
    updatedPost.save();
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: "stop using the url !!" });
  }
};

export const delPost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    deletedPost
      ? res.status(200).json({ message: "post deleted successfuly" })
      : res.status(404).json({ message: "post not found" });
  } catch (error) {
    res.status(400).json({ message: "stop using the url !!" });
  }
};
