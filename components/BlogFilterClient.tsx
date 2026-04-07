"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";

interface BlogPostData {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  description: string;
}

interface BlogFilterClientProps {
  posts: BlogPostData[];
  categories: string[];
}

export default function BlogFilterClient({
  posts,
  categories,
}: BlogFilterClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-2 text-sm font-body font-medium transition-all duration-300 ${
            activeCategory === null
              ? "bg-primary text-white"
              : "bg-primary-light text-primary-dark hover:bg-primary hover:text-white"
          }`}
        >
          Wszystkie
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-body font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-primary-light text-primary-dark hover:bg-primary hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            category={post.category}
            readingTime={post.readingTime}
            description={post.description}
          />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-neutral-600 font-body py-12">
          Brak artykułów w tej kategorii.
        </p>
      )}
    </>
  );
}
