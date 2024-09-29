import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Navbar from '@/components/base/Navbar';

// Helper function to group blog posts by year
const groupByYear = (posts: Post[]) => {
  return posts.reduce((acc: Record<string, Post[]>, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});
};

// Define the interface for the blog posts
interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  duration?: string;
}

export default async function BlogPage() {
  // Fetch blog posts directly within the component
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      description: data.description,
      date: data.date,
      duration: data.duration,
    };
  });

  const postsByYear = groupByYear(posts);

  return (
    <div className="h-screen w-screen bg-black flex justify-center relative">
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#4b220e] opacity-100 blur-3xl left-[40%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#452436] opacity-100 blur-3xl left-[30%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#151428] opacity-100 blur-3xl left-[20%] top-[-350px] origin-center z-0"></div>
      <div className="md:w-[60%] z-10 m-5">
        <Navbar />
        <div className="container mx-auto px-4 py-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      {Object.keys(postsByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{year}</h2>
            <ul className="space-y-6">
              {postsByYear[year].map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                      {post.title} - {new Date(post.date).toLocaleDateString()}
                  </Link>
                  <p className="mt-2 text-gray-600">{post.description}</p>
                  {post.duration && (
                    <p className="text-sm text-gray-500">{post.duration}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
      </div>
  </div>
  );
}


