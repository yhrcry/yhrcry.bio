import { getBio } from "../lib/microcms";
import { FaTwitter, FaInstagram, FaLink } from "react-icons/fa";
import type { ReactElement } from "react";

export default async function Home() {
  const bio = await getBio();

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 text-gray-800 p-8 relative">
      <div className="glass-highlight backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-left transition transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-fade-in">
        
        {/* プロフィール */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={bio.avatar?.url}
            alt="avatar"
            className="w-24 h-24 rounded-full mb-4 shadow-lg"
          />
          <h1 className="text-3xl font-bold text-gray-900 drop-shadow-sm text-center">
            {bio.name}
          </h1>
        </div>

        {/* 自己紹介 */}
        {bio.bio && (
          <div
            className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed space-y-3 text-left mb-6"
            dangerouslySetInnerHTML={{ __html: bio.bio }}
          />
        )}

        {/* SNSリンク */}
        {bio.sns && bio.sns.length > 0 && (
          <div className="mt-6 border-t border-white/40 pt-4">
            <div className="flex justify-center gap-5 mt-4 flex-wrap">
              {bio.sns.map((item: any) => {
                const label = item.label?.toLowerCase();
                const icons: Record<string, ReactElement> = {
                  twitter: <FaTwitter />,
                  instagram: <FaInstagram />,
                };
                const icon = icons[label] || <FaLink />;

                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full 
                              bg-white/40 backdrop-blur-md shadow-md border border-white/50
                              hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] 
                              hover:scale-110 transition-all duration-300"
                  >
                    <span
                      className={`text-2xl ${
                        label === "twitter"
                          ? "text-sky-500"
                          : label === "instagram"
                          ? "text-pink-500"
                          : "text-gray-600"
                      }`}
                    >
                      {icon}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* スキル */}
        {bio.skills && (
          <div className="mt-6 border-t border-white/40 pt-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Skills</h2>
            <div
              className="text-gray-700 text-[15px] leading-relaxed space-y-2"
              dangerouslySetInnerHTML={{ __html: bio.skills }}
            />
          </div>
        )}
      </div>
    </main>
  );
}
