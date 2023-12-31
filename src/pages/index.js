import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-md mx-auto">Days since last JS framework</h1>
      <h1 className="text-2xl mx-auto">0</h1>
      <a
        href="https://github.com/storialp/days-since-js-framework-copy"
        className="underline"
      >
        See code here
      </a>
    </main>
  );
}
