import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  params: {
    slug: string;
  };
};

const Postpage = async ({ params: { slug } }: Props) => {
  //1.전달된 slug에 해당하는 포스트데이터를 가져옴
  //2. 그 데이터를 markdown 뷰어에 넘김(content)
  //   const post = await getPostData(slug);
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-5">
      <Image
        className="w-full h-1/5 max-h-[500px] rounded-2xl"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-semibold">{description}</p>

        <div className="w-52 border-2 border-sky-600 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
};

export default Postpage;
