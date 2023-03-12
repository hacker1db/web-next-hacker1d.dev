import { metadata } from "./head";
import Link from "next/link";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-blue-500">{metadata.title}</h1>
        </Link>
        <p>Welcome to my tech blog 💻</p>
      </div>
    </header>
  );

  const footer = (
    <header>
      <div>
        <p>Written by @hacker1db 💻</p>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <body>
        <div
          className="mx-auto border-red-900 max-w-2xl
        "
        >
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
