import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export const generateMetadata = async () => {
  const data = await getPosts();
  const sizeOfData = data.length;
  return {
    title: `Browse all ${sizeOfData} Posts`,
    desciption: "Here You can get all Posts",
  };
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
