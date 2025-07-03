import { NextResponse } from 'next/server';
import dbConnect from '@/lib/connectDB';
import { Blog } from '@/models/Blog';

export const GET = async () => {
  try {
    await dbConnect();
    const posts = await Blog.find().sort({ date: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Error loading posts' }, { status: 500 });
  } 
};
