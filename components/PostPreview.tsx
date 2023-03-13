import Link from "next/link";
import { PostMetadataModel } from "../models/PostMetadataModels";

const PostPreview = (props: PostMetadataModel) => {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-md bg-white">
      <Link href={`/content/${props.slug}`}>
        <h2 className="font-bold text-slate-800 hover:underline">
          {props.title}
        </h2>
      </Link>
      <p className="text-sm text-slate-400"> {props.date.toString()}</p>
      <p className="text-slate-800">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
