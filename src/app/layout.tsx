import Header from "@/components/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "띠냉s Blog",
    template: "띠냉s Blog | %s",
  },
  description: "프론트엔드 개발자 신행의 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        {/* <header className="flex justify-between">
          띠냉s Blog
          <nav className="">
            <a href="/">Home</a>
            <a href="/">Home</a>
            <a href="/">Home</a>
          </nav>
        </header> */}
        <Header />
        <main className="grow"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
