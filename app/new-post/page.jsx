import PostForm from "../..//components/post-form";
import { createPost } from "../../actions/new-post-actions";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
