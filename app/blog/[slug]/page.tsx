import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import BlogCard from "@/components/BlogCard";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Artykuł nie znaleziony" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, exclude current)
  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>

          {/* Category tag */}
          <span className="inline-block bg-primary-light text-primary-dark rounded-full px-3 py-1 text-xs font-body font-medium mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <p className="font-body text-sm text-neutral-600 mb-8">
            {formattedDate} &middot; {post.readingTime}
          </p>

          {/* Featured image placeholder */}
          <div className="aspect-[16/9] bg-primary-light rounded-2xl mb-10 flex items-center justify-center">
            <span className="font-body text-primary-dark text-sm">
              Zdjęcie wyróżniające
            </span>
          </div>

          {/* Content */}
          <MarkdownRenderer
            htmlContent={post.htmlContent}
            className="font-body text-base leading-relaxed text-neutral-900"
          />

          {/* CTA box */}
          <div className="bg-primary-light rounded-2xl p-8 mt-12 text-center">
            <p className="font-body font-semibold text-lg text-neutral-900 mb-4">
              Chcesz porozmawiać o swoim metabolizmie?
            </p>
            <Link
              href="/kontakt/"
              className="inline-block bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-3 font-body font-semibold transition-all duration-300"
            >
              Umów bezpłatną konsultację
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mb-8">
              Podobne artykuły
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.slug}
                  slug={related.slug}
                  title={related.title}
                  category={related.category}
                  readingTime={related.readingTime}
                  description={related.description}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
