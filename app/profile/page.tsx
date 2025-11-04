"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-white bg-gradient-to-b from-[#020617] to-[#0b1b33]">
      {/* 背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1a2752_0%,#020617_100%)]">
        <div className="absolute w-full h-full bg-[url('/stars.svg')] bg-cover bg-center opacity-60 animate-[float_60s_linear_infinite]"></div>
      </div>

      {/* 光るカード */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
        className="z-10 flex flex-col items-center p-12 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(150,180,255,0.3)] hover:shadow-[0_0_60px_rgba(180,200,255,0.5)] transition-all duration-700"
      >
        <Image
          src="/your-avatar.png"
          alt="Kurumi W"
          width={170}
          height={170}
          className="rounded-full border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        />
        <h1 className="mt-6 text-3xl font-bold tracking-wide">
          Kurumi Wakatsuki
        </h1>
        <div className="flex gap-8 mt-6 text-gray-300 text-lg">
          <Link
            href="/blog"
            className="hover:text-white hover:underline underline-offset-4 transition"
          >
            Blog
          </Link>
          <Link
            href="/profile"
            className="hover:text-white hover:underline underline-offset-4 transition"
          >
            Profile
          </Link>
        </div>
      </motion.div>

      {/* 下の青い発光ライン */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-md"></div>
    </main>
  );
}
