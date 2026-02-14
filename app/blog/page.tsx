import Link from 'next/link';
import { metadata } from './metadata';
import { posts } from '@/data/posts';

export { metadata };

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Блог</h1>
      <p className="mt-4 text-sm text-muted">Короткие материалы о том, как повышать качество управленческих решений.</p>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border border-gray-200 p-5">
            <p className="text-xs text-muted">{post.date}</p>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium underline">
              Читать
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
