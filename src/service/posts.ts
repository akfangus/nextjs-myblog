import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

//이거 다른데서 많이 쓰이기떄문에 한번 빌드하면 여러번 호출되어져서 서버에 부담이 될 수 있음
// export async function getAllPosts(): Promise<Post[]> {
//   const filePath = path.join(process.cwd(), "data", "posts.json");
//   return readFile(filePath, "utf-8")
//     .then<Post[]>(JSON.parse)
//     .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
// }
// 이렇게 캐싱을 해주면 한번만 호출되어져서 서버에 부담이 줄어듬
export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음.`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
