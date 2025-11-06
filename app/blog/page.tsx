import React from "react";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import BlogNavBar from "../components/BlogHeader";
import matter from "gray-matter";

// This function will run on the server to get posts
async function getPosts() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  
  try {
    const filenames = await fs.readdir(postsDirectory);
    const posts = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.md'))
        .map(async (filename, index) => {
          const slug = filename.replace(/\.md$/, '');
          const filePath = path.join(postsDirectory, filename);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContents);

          return {
            id: index + 1,
            title: data.title || slug.replace(/-/g, ' '),
            slug,
            // You can add excerpt, date, etc. from frontmatter here
          };
        })
    );
    
    return posts;
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div>
        <BlogNavBar />
        <div className="pt-24 px-4 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-8">Blog</h1>
          <p className="text-gray-600">No posts found.</p>
        </div>
      </div>
    );
  }

  // For magazine style: first post(s) featured, rest in cards
  const featuredPosts = posts.slice(0, 2); // Take first 2 for featured
  const regularPosts = posts.slice(2); // Rest as cards

  return (
    <div>
      <BlogNavBar />
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Latest Posts</h1>
        
        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <div className={`grid gap-6 mb-8 ${featuredPosts.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-64">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#cc7af3] transition-colors duration-200 mb-4">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          Click to read more...
                        </p>
                      </div>
                      <div className="text-xs text-gray-400 mt-4">
                        Featured Post
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Cards */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-black mb-6">More Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc7af3] transition-colors duration-200 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Click to read...
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}