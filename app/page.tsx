import fs from "fs";
import Link from "next/link";

function getBlogPosts(): string[] {
  const blogPostsDir = "content/";
  const blogPostFiles = fs.readdirSync(blogPostsDir);
  const markdownFiles = blogPostFiles.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((post) => post.replace(".md", ""));

  return slugs;
}

const HomePage = () => {
  const contentData = getBlogPosts();
  const postsPreview = contentData.map((slug, index) => (
    <div key={index}>
      <Link href={`/content/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return <div>{postsPreview}</div>;
};

export default HomePage;
