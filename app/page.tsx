import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../models/PostMetadataModels";

function getBlogPosts(): string[] {
  const blogPostsDir = "content/";
  const blogPostFiles = fs.readdirSync(blogPostsDir);
  const markdownFiles = blogPostFiles.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((post) => post.replace(".md", ""));

  return slugs;
}

const getPostMetadata = (): PostMetadata[] => {
  const folder = "content/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`content/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const HomePage = () => {
  const contentData = getPostMetadata();
  const postsPreview = contentData.map((post, index) => (
    <div key={index}>
      <Link href={`/content/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p> {post.date}</p>
    </div>
  ));

  return <div>{postsPreview}</div>;
};

export default HomePage;
