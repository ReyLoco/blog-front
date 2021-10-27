import Head from "next/head";
import Title from "../../components/Title";
import { TITLE, ARTICLE, ARTICLE_DET, DESCRIPTION } from "../../constants";

export default function Article({ article }) {
  return (
    <>
      <Head>
        <title>{TITLE}: {ARTICLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Title>{ARTICLE_DET}</Title>
      <div className="card">
        <h2>{article.title}</h2>
        <p>{article.text}</p>
        <span>Author: {article.author}</span>
        <span>Created: {article.createdAt}</span>
        <span>Last Update: {article.updatedAt}</span>
      </div>
      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://217.71.202.202:8000/api/articles/${params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}
