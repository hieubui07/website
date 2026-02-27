import Link from "next/link";

// Type definition for writing posts
export interface WritingPost {
  title: string;
  slug: string;
}

// Sample data - replace with your actual posts
const writingPosts: WritingPost[] = [
  {
    title: "Getting started with Next.js 14",
    slug: "getting-started-nextjs-14",
  },
  {
    title: "Building a design system with Tailwind",
    slug: "building-design-system-tailwind",
  },
  {
    title: "TypeScript best practices",
    slug: "typescript-best-practices",
  },
  {
    title: "Creating accessible React components",
    slug: "accessible-react-components",
  },
  {
    title: "Performance optimization techniques",
    slug: "performance-optimization",
  },
];

export default function WritingSection() {
  return (
    <section className="mb-16">
      <Link href="/writing" className="section-title link-hover inline-block">
        Writing
      </Link>

      <ul className="space-y-3">
        {writingPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="text-secondary hover:text-accent transition-colors flex items-start gap-2"
            >
              <span className="text-primary">•</span>
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
