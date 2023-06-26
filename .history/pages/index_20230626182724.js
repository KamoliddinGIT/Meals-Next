import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Contact from "@/components/Contact";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link rel="shortcut icon" href="/imgs/db.png" />
        <title>Meals-Next APP</title>
      </Head>
      <Main />
    </>
  );
}
