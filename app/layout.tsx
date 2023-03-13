import { metadata } from "./head";
import Link from "next/link";
import "../styles/global.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="logo for hacker1db"
          className="mx-auto py-0"
        ></Image>
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">{metadata.title}</h1>
        </Link>
        <p className="text-slate-300">Welcome to my tech blog 💻</p>
      </div>
    </header>
  );

  const footer = (
    <header>
      <div className="mx-auto border-t border-sate-400 text-center text-slate-400 mt-6 py-6">
        <p>Written by @hacker1db 💻</p>
        <Link href="https://newsletter.hacker1db.dev/">
          News letter - Signup.
        </Link>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6 ">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
