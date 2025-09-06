"use client";

import React from "react";
import Link from "next/link";
import BlogNavBar from "../components/BlogHeader";

const posts = [
  { id: 1, title: "Airbnb Goes Ape", slug: "airbnb-goes-ape" },
  { id: 2, title: "Another Great Post", slug: "another-great-post" },
  { id: 3, title: "A Post About Next.js", slug: "a-post-about-next-js" },
];

export default function BlogPage() {
  return (
    <div>
      <BlogNavBar />
      <div className="pt-24">
        <h1>All Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {/* This is the key part: linking to the dynamic route */}
              <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
