import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface MarkdownPage {
  slug: string;
  title: string;
  description: string;
  order?: number;
  content: string;
  htmlContent: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  content: string;
  htmlContent: string;
}

interface PageFrontmatter {
  title: string;
  description: string;
  order?: number;
}

interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
}

async function renderMarkdown(markdownContent: string): Promise<string> {
  const result = await remark().use(html).process(markdownContent);
  return result.toString();
}

export async function getMarkdownPage(
  slug: string
): Promise<MarkdownPage | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as PageFrontmatter;
  const htmlContent = await renderMarkdown(content);

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    order: frontmatter.order,
    content,
    htmlContent,
  };
}

export function getAllPageSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_DIR, "blog", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogFrontmatter;
  const htmlContent = await renderMarkdown(content);

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    category: frontmatter.category,
    readingTime: frontmatter.readingTime,
    content,
    htmlContent,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(CONTENT_DIR, "blog");

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const slug = file.replace(/\.md$/, "");
    const post = await getBlogPost(slug);
    if (post) {
      posts.push(post);
    }
  }

  // Sort by date, newest first
  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return posts;
}

export function getAllBlogSlugs(): string[] {
  const blogDir = path.join(CONTENT_DIR, "blog");

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogCategories(): string[] {
  const blogDir = path.join(CONTENT_DIR, "blog");

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  const categories = new Set<string>();

  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const fileContent = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data } = matter(fileContent);
    const frontmatter = data as BlogFrontmatter;
    if (frontmatter.category) {
      categories.add(frontmatter.category);
    }
  }

  return Array.from(categories);
}
