import { Post } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";

//구조분해할당 에서 타입 지정은 이렇게 하는게 편함
type Props = { posts: Post[] };

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
