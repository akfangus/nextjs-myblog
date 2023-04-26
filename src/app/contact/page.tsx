import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion, SiBloglovin } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "저에게 메일 보내기",
};

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: "https://github.com/akfangus",
  },
  {
    icon: <SiNotion />,
    url: "https://nosy-omelet-cf5.notion.site/860846b725cc47bab2b883bf8c03eea6",
  },
  {
    icon: <SiBloglovin />,
    url: "https://nosy-omelet-cf5.notion.site/Lee-Shin-Heang-dddadbce0f284626b2ee320146722848",
  },
];
const ContactPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-4">Contact Me</h2>
      <p className="my-2">akfanakfan@naver.com</p>

      <ul className="flex gap-8 my-2">
        {LINKS.map(({ icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-300"
          >
            {icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Send Me an Email</h2>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
