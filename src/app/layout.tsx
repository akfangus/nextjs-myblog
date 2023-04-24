import Header from "@/components/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
