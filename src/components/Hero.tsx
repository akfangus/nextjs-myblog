import Image from "next/image";
import React from "react";
import Link from "next/link";

import profileImage from "../../public/images/profile2.jpg";

const Hero = () => {
  return (
    <section className="text-center">
      {/* 이미지를 먼저 다운로드 받아줘 => 보여지는 우선순위를 결정 => priority */}
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Profile"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">
        {"도전을 즐기는 개발자 이신행입니다."}
      </h2>
      <h3 className="text-xl font-semibold">Front-End Engineer</h3>
      <p>유저 친화적인 웹 앱을 만들고 싶습니다.</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
