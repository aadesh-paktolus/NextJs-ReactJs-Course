import PostForm from "../..//components/post-form";
import { createPost } from "../../actions/new-post-actions";

export const metadata = {
  title: "Add our new Posts",
  description: "Here we can add our new Posts",
};

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
