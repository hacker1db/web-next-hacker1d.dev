import fs from "fs";
import Markdown from "markdown-to-jsx";

const getBlogPostContent = (slug: string) => {
  const blogPostsDir = "content/";
  const file = `${blogPostsDir}${slug}.md`;
  const blogPostContent = fs.readFileSync(file, "utf8");

  return blogPostContent;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getBlogPostContent(slug);
  return (
    <div>
      <h1>{slug}</h1>
      <Markdown>{content}</Markdown>, document.body)
    </div>
  );
};
export default PostPage;
