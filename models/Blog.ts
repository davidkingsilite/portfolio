import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  id: Number,
  slug: { type: String, required: true, unique: true },
  title: String,
  description: String,
  date: String,
  author: String,
  category: String,
  image: String,
  highlight: Boolean,
  content: String,
});

export const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema); 

