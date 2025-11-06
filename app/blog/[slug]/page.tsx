import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from 'react-markdown';
import BlogNavBar from '../../components/BlogHeader';
import matter from "gray-matter";

// Define the props type for the component
type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const filenames = await fs.readdir(postsDirectory);

  // Return an array of objects, where each object has a 'slug' key
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), '_posts', `${slug}.md`);
  const fileContents = await fs.readFile(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const title = data.title || slug.replace(/-/g, ' ');
  const subtitle = data.subtitle;

  return (
    <div>
      <BlogNavBar />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-black text-3xl font-bold mb-8 text-center">
          {title}
        </h1>
        {subtitle && (
      <p className="text-gray-800 text-extrabold text-lg text-center mb-8">
        {subtitle}
      </p>
        )}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              // Style paragraphs
              a: ({ href, children }) => (
              <a
              href={href}
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
              >
              {children}
              </a>
              ), 
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              // Style headings
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold text-black mb-4 text-center">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-bold text-black mb-3 text-center">
                  {children}
                </h2>
              ),
              // Style images
              img: ({ src, alt }) => (
                <img 
                  src={src} 
                  alt={alt || ''} 
                  className="max-w-full h-auto mx-auto my-6 rounded-lg shadow-md"
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
