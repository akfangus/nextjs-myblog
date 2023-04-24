import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

const FeaturedPosts = async () => {
  //1,  모든 post.json을 읽어와야함 => service/posts.tx 생성
  const posts = await getFeaturedPosts();
  //2. 읽어온 post.json을 PostsGrid에 넘겨줘야함 => prop으로 전달하고 PostsGrid에서 type을 지정해줘야함

  return (
    <section>
      <h2 className="text-2xl font-bold my-3">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
