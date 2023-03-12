import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const contentData = getPostMetadata();
  const postsPreview = contentData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div>{postsPreview}</div>;
};

export default HomePage;
