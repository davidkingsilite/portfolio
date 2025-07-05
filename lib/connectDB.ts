import mongoose, { Mongoose } from 'mongoose';

// const MONGODB_URI = process.env.DATABASE_URL;

const MONGODB_URI: string = process.env.DATABASE_URL!;

if (!MONGODB_URI) {
  throw new Error('❌ Please define the DATABASE_URL environment variable inside .env.local');
}

// Add a type-safe declaration to the global object
declare global {
  // Allow global `mongoose` reuse in development to prevent hot-reload issues
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// In dev, prevent creating new connection on every hot reload
const globalWithMongoose = global as typeof globalThis & {
  mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = {
    conn: null,
    promise: null,
  };
}

const cached = globalWithMongoose.mongoose;

async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('✅ MongoDB connected');
    return cached.conn;
  } catch (error) {
    cached.promise = null; // Reset on failure
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}

export default connectDB;

