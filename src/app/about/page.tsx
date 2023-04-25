import Hero from "@/components/Hero";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 my-2">Who Am I?</h2>
        <p>
          개발이 재밌는 프론트엔드 개발자 <br />
          모르는건 물어보자 결국 알아가자
        </p>
        <h2 className="text-2xl font-bold text-gray-800 my-2">Career</h2>
        <p>항해 99 (-2023.04)</p>
        <h2 className="text-2xl font-bold text-gray-800 my-2">Skills</h2>
        <p>React, Typescript, Next.js</p>
      </section>
    </>
  );
};

export default AboutPage;
