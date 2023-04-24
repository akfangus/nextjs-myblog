import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

const Postpage = async ({ params: { slug } }: Props) => {
  //1.전달된 slug에 해당하는 포스트데이터를 가져옴
  //2. 그 데이터를 markdown 뷰어에 넘김(content)
  //   const post = await getPostData(slug);
  const post = await getPostData(slug);
  const { title, path } = post;
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-5">
      <Image
        className="w-full h-1/5 max-h-[500px] rounded-2xl"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
};

export default Postpage;
