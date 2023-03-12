export const metadata = {
  title: "Hacker1db.dev Next Blog",
  description: "hack the planet and keep learning",
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
