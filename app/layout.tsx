import { metadata } from "./head";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>{metadata.title}</h1>
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
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
