import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getBlogPostContent = (slug: string) => {
  const blogPostsDir = "content/";
  const file = `${blogPostsDir}${slug}.md`;
  const blogPostContent = fs.readFileSync(file, "utf8");
  const matterContent = matter(blogPostContent);

  return matterContent;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getBlogPostContent(slug);
  return (
    <div>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>, document.body)
    </div>
  );
};
export default PostPage;
