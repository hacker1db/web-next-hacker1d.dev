import Link from "next/link";
import { PostMetadataModel } from "../models/PostMetadataModels";

const PostPreview = (props: PostMetadataModel) => {
  return (
    <div>
      <Link href={`/content/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p> {props.date.toString()}</p>
    </div>
  );
};

export default PostPreview;
