import { getBio } from "../lib/microcms";
import { FaTwitter, FaInstagram, FaLink } from "react-icons/fa";

export default async function Home() {
  const bio = await getBio();

  return (
    <main className="flex flex-col items-center min-h-screen text-gray-100 px-6 py-10 relative">
      <div className="glass-card backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-left transform hover:scale-[1.02] transition duration-300">

        {/* プロフィール */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={bio.avatar?.url}
            alt="avatar"
            className="w-32 h-32 rounded-full mb-4 shadow-lg ring-2 ring-white/30"
          />
          <h1 className="text-3xl font-semibold drop-shadow-md text-center">
            {bio.name}
          </h1>
        </div>

        {/* 自己紹介 */}
        <div
          className="text-gray-200 text-[15px] sm:text-[16px] leading-relaxed space-y-3 text-left mb-8"
          dangerouslySetInnerHTML={{ __html: bio.bio }}
        />

        {/* SNSリンク */}
        {bio.sns && bio.sns.length > 0 && (
          <div className="border-t border-white/20 pt-5 flex justify-center gap-6 mt-4">
            {bio.sns.map((item: any) => {
              const label = item.label?.toLowerCase();
              const icons: Record<string, React.ReactNode> = {
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
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all hover:scale-110 border border-white/30 shadow-md"
                >
                  <span
                    className={`text-2xl ${
                      label === "twitter"
                        ? "text-sky-400"
                        : label === "instagram"
                        ? "text-pink-400"
                        : "text-white"
                    }`}
                  >
                    {icon}
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
