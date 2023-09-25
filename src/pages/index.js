import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-md">Days since last JS framework</h1>
      <h1 className="text-2xl">0</h1>
      <a href="https://github.com/storialp/days-since-js-framework-copy">
        See code here
      </a>
    </main>
  );
}
