import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import Title from "../../components/Title";
import { ARTICLES, DESCRIPCION, TITLE } from "../../constants";

moment.locale("es");

export default function Articles({ articlesCount, articles }) {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const res = await fetch("217.71.202.202:8000/api/articles");
  //     const newArticles = await res.json();
  //     console.log(newArticles.users)
  //     setArticles(newArticles);
  //   };
  //   // console.log(articles)

  //   fetchArticles();
  // }, []);

  return (
    <>
      <Head>
        <title>
          {TITLE}: {ARTICLES}
        </title>
        <meta name="description" content={DESCRIPCION} />
      </Head>
      <Title>{ARTICLES}</Title>

      <div className="grid">
        {articles.map(({ _id, title, text, createdAt, updatedAt, author }, i) => {
          return (
            <div className="card" key={i + 1}>
              <h3>
                {i + 1}.- {title}
              </h3>
              <span>Autor: {author}.</span>
              <span>{moment(createdAt).format("LL")}.</span> Última modificación:{" "}
              <span>{moment(updatedAt).format("LL")}.</span>
              <p>
                {text.slice(0, 100)}...{" "}
                <Link href={"/articles/[_id]"} as={`/articles/${_id}`} key={i + 1}>
                  <a className="readmore">leer más</a>
                </Link>
              </p>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
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

export async function getServerSideProps() {
  const res = await fetch("http://217.71.202.202:8000/api/articles/");
  const articles = await res.json();

  // const newListArticles = articles.articles.map((doc) => {
  //   console.log(article)

  //   article._id = `${article._id}`;
  //   article.createdAt = moment(doc.createdAt).format("dd-mm-yyyy");
  //   article.updatedAt = moment(doc.updatedAt).format("LLL");
  //   return article;
  // });

  return {
    props: {
      articlesCount: articles.totalItems,
      articles: articles.articles,
    },
  };
}
