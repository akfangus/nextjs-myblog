import { getNonFeaturedPosts } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-5">
      <h2 className="text-2xl font-bold my-3">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPosts;
