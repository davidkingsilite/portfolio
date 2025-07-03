type BlogPost = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
  };
  
  const posts: BlogPost[] = [
    {
      slug: '10-proven-cleaning-tips',
      title: '10 Proven Tips for Keeping Your Home Spotless',
      date: '2025-06-30',
      excerpt: 'Use these pro-level tips to keep your home sparkling clean every day.',
      content: `<p>Start by decluttering daily, then create a cleaning schedule. Use vinegar, baking soda...</p>`,
    },
    {
      slug: 'eco-friendly-cleaning',
      title: 'Eco-Friendly Cleaning Products That Actually Work',
      date: '2025-06-28',
      excerpt: 'Going green? These natural cleaners don’t compromise on power.',
      content: `<p>Try castile soap, baking soda, and essential oils for an effective, safe clean...</p>`,
    },
  ];
  
  export async function getBlogBySlug(slug: string) {
    return posts.find((post) => post.slug === slug) || null;
  }

  export async function getAllBlogs() {
    return posts;
  }
  
  