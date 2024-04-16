import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("Rastislav Balcerčík");

  const handleTextChange = () => {
    setText("RB");
  };

  return (
    <main className={"flex flex-col gap-4 items-center justify-center"}>
      <h1>TSOFT - Projekt 1</h1>
      <p id={"text"}>{text}</p>
      <button
        onClick={handleTextChange}
        id={"button"}
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
      >
        Zmeň text
      </button>
    </main>
  );
}
