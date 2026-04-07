import type { Metadata } from "next";
import { getAllBlogPosts, getBlogCategories } from "@/lib/markdown";
import BlogFilterClient from "@/components/BlogFilterClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog o psychodietetyce, insulinooporności, PCOS i zdrowej relacji z jedzeniem. Wiedza, która pomaga zrozumieć swoje ciało.",
  openGraph: {
    title: "Blog | Malwina Karczmarczyk",
    description:
      "Blog o psychodietetyce, insulinooporności, PCOS i zdrowej relacji z jedzeniem.",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const categories = getBlogCategories();

  const postData = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    readingTime: post.readingTime,
    description: post.description,
  }));

  return (
    <>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-4">
            Blog
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Wiedza, która pomaga zrozumieć swoje ciało.
          </p>
        </div>
      </section>

      {/* Blog listing */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogFilterClient posts={postData} categories={categories} />
        </div>
      </section>
    </>
  );
}
