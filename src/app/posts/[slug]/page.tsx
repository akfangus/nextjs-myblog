import { getPostData } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

const Postpage = async ({ params: { slug } }: Props) => {
  //1.전달된 slug에 해당하는 포스트데이터를 가져옴
  //2. 그 데이터를 markdown 뷰어에 넘김

  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
};

export default Postpage;
