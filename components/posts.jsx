"use client";

import { tooglePostLikeStatus } from "@/actions/new-post-actions";
import { formatDate } from "@/lib/format";
import Image from "next/image";
import { useOptimistic } from "react";
import LikeButton from "./like-icon";

function Post({ post, action }) {
  const loaderHandler = (config) => {
    const startPoint = config.src.split("upload/")[0];
    const endPoint = config.src.split("upload/")[1];
    const transformation = `w_200,q_${config.quality}`;
    return `${startPoint}upload/${transformation}/${endPoint}`;
  };

  return (
    <article className="post">
      <div className="post-image">
        <Image
          loader={loaderHandler}
          src={post.image}
          width={200}
          height={130}
          alt={post.title}
          quality={50}
        />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked && "liked"}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimisticsPost] = useOptimistic(
    posts,
    (prevPost, updatedPostId) => {
      const updatedPostIndex = prevPost.findIndex(
        (post) => post.id === updatedPostId
      );

      if (updatedPostIndex === -1) {
        return prevPost;
      }

      const updatedPost = { ...prevPost[updatedPostIndex] };
      updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
      updatedPost.isliked = !updatedPost.isliked;
      const newPosts = [...prevPost];
      newPosts[updatedPostIndex] = updatedPost;
      return newPosts;
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  const updatePost = async (postId) => {
    updateOptimisticsPost(postId);
    await tooglePostLikeStatus(postId);
  };

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
