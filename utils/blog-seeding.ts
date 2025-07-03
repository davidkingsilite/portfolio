import mongoose from 'mongoose';
import { Blog } from '../models/Blog'; // Adjust path if needed
import dotenv from 'dotenv';


dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL as string;

async function allBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Blog.deleteMany({});

    // Sample blog data
    await Blog.insertMany([
     
      {
        id: 1,
        slug: 'ai-in-frontend-development',
        title: 'AI in Frontend Development: How Tools Like GPT and Vercel AI SDK Are Transforming UIs',
        description:
          `2025 is shaping up to be a breakthrough year for AI-assisted frontend development. Here's how AI is being integrated into modern UIs — and how developers can get ahead of the curve.`,
        image: '/Image-(10).png',
        date: 'June 15, 2025',
        author: 'Danielle Harper',
        category: 'AI in Tech',
        highlight: false,
        content:`The line between artificial intelligence and user interface design is blurring. With tools like OpenAI's GPT models, Vercel’s AI SDK, and LangChain.js, developers are now building UIs that think, reason, and respond.

        What's Changing?
        Conversational Interfaces: Websites can now include AI-powered chatbots trained on product data, documentation, or user FAQs.
        
        Code Generation: VSCode Copilot and similar tools drastically improve developer speed and accuracy.
        
        Semantic Search: Frontend apps can offer Google-like search experiences powered by vector embeddings.
        
        Why It Matters
        Developers aren't just coding — they're designing intelligent systems. As AI becomes more accessible through APIs and SDKs, frontend developers need to understand prompt engineering, serverless inference, and fine-tuning models.
        
        "AI won’t replace developers — but developers using AI will replace those who don’t."        
        `,
      },
      {
        id: 2,
        slug: 'react-19-and-server-components',
        title: 'React 19, Server Components, and the Future of the Frontend',
        description:
          `React 19 is bringing long-awaited features like Server Components, new hooks, and built-in optimizations. Here's what frontend developers need to know.`,
        image: '/Image-(11).png',
        date: 'May 30, 2025',
        author: 'Claire Whitmore',
        category: 'Server Components',
        highlight: true,
        content: `React 19 is now stable, and it's changing the way we build web applications. The major focus? Performance, DX, and scalability.

        Key Highlights:
        1. Server Components: Write components that render only on the server, reducing bundle size and speeding up the UI.
        
        2. Async Context + Hooks: New patterns for handling async operations in a cleaner, more declarative way.
        
        3. Improved useOptimistic and Suspense: Better tooling for optimistic UI and transitions.
        
        Why React 19 Matters:
        The frontend space is shifting toward hybrid rendering. Understanding Server Components is critical for building performant, scalable apps in 2025.
        
        For those using Next.js 15, React 19 fits seamlessly with App Router and the new caching strategies.`,
      },
      {
        id: 3,
        slug: 'edge-functions-future-of-apis',
        title: 'The Rise of Edge Functions: How Developers Are Moving Beyond Traditional APIs',
        description:
          `From Vercel to Cloudflare Workers, edge computing is no longer hype. Here's how edge functions are changing API design and frontend speed.`,
        image: '/Image-(12).png',
        date: 'May 10, 2025',
        author: 'Olivia Mensah',
        category: 'Static sites are fast but dynamic',
        highlight: false,
        content:`Static sites are fast — but dynamic, real-time experiences need server logic. That’s where edge functions come in.

        In 2025, platforms like Vercel, Cloudflare, and Bun.sh are allowing developers to deploy server logic at the edge — close to users.
        
        What Are Edge Functions?
        They're lightweight serverless functions that execute near the user’s region. That means lower latency, faster response times, and better scalability.
        
        Real Use Cases:
        Auth validation
        
        Real-time personalization
        
        Geo-specific content or redirects
        
        Why It Matters for Frontend Devs
        You can now do things like: 
        This was unthinkable just a few years ago. Today, it's a best practice.`
      },
    ]);

    console.log('Seeded blog posts successfully ✅');
    mongoose.disconnect();
  } catch (error) {
    console.error('Seeding failed ❌', error);
    mongoose.disconnect();
  }
}

allBlogs();
