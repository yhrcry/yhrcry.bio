import Image from "next/image";
import { getBlogBySlug, getBlogs } from "@/lib/microcms";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getBlogBySlug(resolvedParams.slug);

  return (
    <main className="flex flex-col items-center min-h-screen text-white py-16 px-6">
      <article className="max-w-3xl w-full space-y-6">
        {post.thumbnail?.url && (
          <Image
            src={post.thumbnail.url}
            alt={post.title}
            width={1000}
            height={600}
            className="rounded-lg border border-white/10"
          />
        )}
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-400">
          {formatJPDate(post.publishedAt || post.createdAt)}
        </p>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogs();
  return (posts.contents || []).map((p: any) => ({
    slug: p.id,
  }));
}

function formatJPDate(iso: string) {
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
