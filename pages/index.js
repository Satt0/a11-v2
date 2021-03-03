import "bootstrap/dist/css/bootstrap.min.css";
import App from "src/App";
import Head from "next/head";

export default function Home({ items }) {

  return (
    <>
      <Head>
        <title>A11 K52 Lạng Giang số 1 </title>
        <meta property="og:url" content="https://a11galery.tk" />
        <meta
          name="description"
          content="A11 k52 -  Trung học phổ thông Lạng Giang số 1! Đây là website trưng bày ảnh kỉ yếu của tập thể lớp A11 k52 Trường Trung học phổ thông Lạng Giang số 1."
        />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta property="og:title" content="A11 Offical website" />

        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="A11 k52 -  Trung học phổ thông Lạng Giang số 1!"
        />
        <meta property="og:image" content={"/bg/leader/leader1.JPG"} />
      </Head>
      <App />
    </>
  );
}
export async function getStaticProps() {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://desolate-escarpment-45092.herokuapp.com"
      : "http://localhost:1337";
  const data = await fetch(`${url}/carousels`).then((res) => res.json());
  return {
    props: {
      items: data,
    },
  };
}
