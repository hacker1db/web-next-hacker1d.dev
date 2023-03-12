import { metadata } from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>{metadata.title}</h1>
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
