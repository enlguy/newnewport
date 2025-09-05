import { promises as fs } from "fs";
import path from "path";
import BlogNavBar from '../../components/BlogHeader'

// Define the props type for the component
type BlogPostPageProps = {
  params: {
    slug: string;
  };
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
  const { slug } = params;

  const filePath = path.join(process.cwd(), '_posts', `${slug}.md`);
  const fileContents = await fs.readFile(filePath, 'utf8');

  return (
    <div>
      <BlogNavBar />
      <div className="pt-24 px-4">
        <h1 className="text-black">Blog Post: {slug}</h1>
        <pre>{fileContents}</pre>
      </div>
    </div>
  );
}