import Image from "next/image";
import Link from "next/link";
import { getProfile } from "@/lib/microcms";

export default async function Home() {
  const data = await getProfile();
  const profile = data.contents ? data.contents[0] : data;

  return (
    <main className="flex items-center justify-center min-h-screen text-white">
      <div className="text-center bg-white/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10 shadow-xl">
        <div className="flex flex-col items-center">
          <Image
            src={profile.avatar?.url}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-full border border-gray-600 mb-4"
          />
          <h1 className="text-xl font-semibold mb-4">{profile.name}</h1>
          <div className="flex gap-6 text-gray-300">
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/profile" className="hover:text-white transition">Profile</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
