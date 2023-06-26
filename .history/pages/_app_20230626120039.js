import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis&family=Inter:wght@500&family=Rubik+Vinyl&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
          <title>Next APP</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
