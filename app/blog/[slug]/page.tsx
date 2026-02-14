import { notFound } from 'next/navigation';
import { metadata } from './metadata';
import { posts } from '@/data/posts';

export { metadata };

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs text-muted">{post.date}</p>
      <h1 className="mt-2 text-4xl font-semibold">{post.title}</h1>
      <p className="mt-6 text-sm leading-7 text-muted">{post.content}</p>
    </article>
  );
}
