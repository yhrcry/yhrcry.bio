import Image from "next/image";
import { getProfile } from "@/lib/microcms";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default async function ProfilePage() {
  const data = await getProfile();
  const profile = data.contents ? data.contents[0] : data; // ←ここ重要

  if (!profile) {
    return <p className="text-center text-gray-400 mt-10">プロフィールが見つかりませんでした。</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white">
      {/* プロフィール画像 */}
      <div className="mb-6">
        <Image
          src={profile.avatar?.url}
          alt={profile.name}
          width={120}
          height={120}
          className="rounded-full border border-gray-600"
        />
      </div>

      {/* 名前 */}
      <h1 className="text-2xl font-bold mb-6">{profile.name}</h1>

      {/* 自己紹介 */}
      <div
        className="text-gray-300 leading-relaxed max-w-lg text-left mb-10"
        dangerouslySetInnerHTML={{ __html: profile.bio }}
      />

      {/* SNSリンク（アイコン付き） */}
      <div className="flex gap-6">
        {profile.sns?.map((sns: any) => {
          let Icon;
          switch (sns.label.toLowerCase()) {
            case "twitter":
              Icon = FaTwitter;
              break;
            case "instagram":
              Icon = FaInstagram;
              break;
            default:
              return null;
          }
          return (
            <Link
              key={sns.url}
              href={sns.url}
              target="_blank"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full"
            >
              <Icon />
              <span>{sns.label}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
