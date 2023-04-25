"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};
const ContactForm = () => {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "성공", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          name="from"
          id="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        />

        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="text-black"
        />

        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          name="message"
          id="message"
          required
          value={form.message}
          onChange={onChange}
          className="text-black"
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
          submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
