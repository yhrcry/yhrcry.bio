import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "../../lib/microcms";

export const revalidate = 60;

export default async function BlogListPage() {
  const posts = await getBlogs();
  const blogs = posts.contents || [];

  return (
    <main className="flex flex-col items-center min-h-screen text-white py-16">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <ul className="grid gap-6 max-w-3xl w-full">
        {blogs.map((p: any) => (
          <li key={p.id}>
            <Link
              href={`/blog/${p.id}`}
              className="block glass p-6 hover:opacity-95 transition rounded-xl border border-white/10 bg-white/5"
            >
              <div className="flex gap-5 items-start">
                {p.thumbnail?.url && (
                  <Image
                    src={p.thumbnail.url}
                    alt={p.title}
                    width={100}
                    height={100}
                    className="rounded-lg border border-gray-700"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                  <p className="text-gray-400 text-sm">
                    {new Date(p.publishedAt).toLocaleDateString("ja-JP")}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
