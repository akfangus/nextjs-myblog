import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};

const AdjacentPostCard = ({
  post: { path, title, description },
  type,
}: Props) => {
  return (
    <Link href={`/posts/${path}`} className="relative w-full bg-black max-h-50">
      <Image
        className="w-full opacity-40"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center text-white px-5">
        {type === "prev" && (
          <FaArrowLeft className="text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl" />
        )}
        <div className="w-full text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm font-bold">{description}</p>
        </div>
        {type === "next" && (
          <FaArrowRight className="text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl" />
        )}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
