import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Navbar from '@/components/base/Navbar';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

// Define the interface for the blog post
interface Post {
  title: string;
  description: string;
  duration?: string;
  date: string;
  content: string;
}

// Fetch blog post content dynamically based on URL
export default async function BlogPostPage({ params }: { params: { id: string[] } }) {
  const slug = params.id.join('/'); // Handling for dynamic [...id] parts of the URL
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const post: Post = {
    title: data.title,
    description: data.description,
    duration: data.duration,
    date: data.date,
    content: content,
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-16 lg:px-6 xl:px-8">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600">
              <time dateTime={post.date} className="mr-2">{new Date(post.date).toLocaleDateString()}</time>
              {post.duration && (
                <span className="ml-2">• {post.duration}</span>
              )}
            </div>
          </header>
          <section className="mb-8">
            <p className="text-lg leading-relaxed mb-4">{post.description}</p>
          </section>
          <section className="prose max-w-none">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {post.content}
            </ReactMarkdown>
          </section>
        </article>
      </main>
    </div>
  );
}
