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
        image: '/ChatGPT-Image.png',
        date: 'June 15, 2025',
        author: 'Danielle Harper',
        category: 'AI in Tech',
        highlight: false,
        content:`The line between artificial intelligence and user interface design is blurring. With tools like <strong>OpenAI's GPT models, Vercel’s AI SDK</strong>, and <strong>LangChain.js</strong>, developers are now building UIs that think, reason, and respond.

        <h2><strong>What's Changing?</strong></h2>
        <ul>
        <li><strong>"Conversational Interfaces:</strong> Websites can now include AI-powered chatbots trained on product data, documentation, or user FAQs."</li>
        
        <li><strong>"Code Generation:</strong> VSCode Copilot and similar tools drastically improve developer speed and accuracy."</li>
        
        <li><strong>"Semantic Search:</strong> Frontend apps can offer Google-like search experiences powered by vector embeddings."</li>
        </ul>

        <strong>Why It Matters</strong>
        Developers aren't just coding — they're designing intelligent systems. As AI becomes more accessible through APIs and SDKs, frontend developers need to understand <i>prompt engineering, serverless inference, and fine-tuning models</i>.
        
        "AI won’t replace developers — but developers using AI will replace those who don’t."        
        `,
      },
      {
        id: 2,
        slug: 'react-19-and-server-components',
        title: 'React 19, Server Components, and the Future of the Frontend',
        description:
          `React 19 is bringing long-awaited features like Server Components, new hooks, and built-in optimizations. Here's what frontend developers need to know.`,
        image: '/reactpic.png',
        date: 'May 30, 2025',
        author: 'Claire Whitmore',
        category: 'Server Components',
        highlight: true,
        content: `<strong>React 19</strong> is now stable, and it's changing the way we build web applications. The major focus? Performance, DX, and scalability.

        <h2><strong>Key Highlights:</strong></h2>
        <ul>
        <strong>
        <li>1. Server Components: Write components that render only on the server, reducing bundle size and speeding up the UI.</li>
        
        <li>2. Async Context + Hooks: New patterns for handling async operations in a cleaner, more declarative way.</li>
        
        <li>3. Improved useOptimistic and Suspense: Better tooling for optimistic UI and transitions.</li>
        </strong>
        </ul>
        <strong>Why React 19 Matters:</strong>
        The frontend space is shifting toward hybrid rendering. Understanding Server Components is critical for building performant, scalable apps in 2025.
        
        For those using <strong>Next.js 15, React 19</strong> fits seamlessly with App Router and the new caching strategies.`,
      },
      {
        id: 3,
        slug: 'edge-functions-future-of-apis',
        title: 'The Rise of Edge Functions: How Developers Are Moving Beyond Traditional APIs',
        description:
          `From Vercel to Cloudflare Workers, edge computing is no longer hype. Here's how edge functions are changing API design and frontend speed.`,
        image: '/edgecomputing.png',
        date: 'May 10, 2025',
        author: 'Olivia Mensah',
        category: 'Static sites are fast but dynamic',
        highlight: false,
        content:`Static sites are fast — but dynamic, real-time experiences need server logic. That’s where edge functions come in.

        In 2025, platforms like Vercel, Cloudflare, and Bun.sh are allowing developers to deploy server logic at the edge — close to users.
        
        <strong>What Are Edge Functions?</strong>
        They're lightweight serverless functions that execute near the user’s region. That means lower latency, faster response times, and better scalability.
        
        <strong>Real Use Cases:</strong>
        Auth validation
        
        Real-time personalization
        
        Geo-specific content or redirects
        
        <strong>Why It Matters for Frontend Devs</strong>
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
