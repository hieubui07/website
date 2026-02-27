import Link from "next/link";
import Header from "../components/Header";

export default function WritingPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-content mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Writing</h1>

        <div className="prose prose-lg">
          <p className="text-secondary mb-8">
            Thoughts on design, development, and everything in between.
          </p>

          {/* Add your writing posts here */}
          <div className="space-y-8">
            <article>
              <Link href="/writing/sample-post" className="group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Sample Post Title
                </h2>
                <p className="text-secondary mb-2">
                  This is a sample description of a blog post. Replace this with
                  actual content.
                </p>
                <time className="text-sm text-secondary">January 1, 2024</time>
              </Link>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
