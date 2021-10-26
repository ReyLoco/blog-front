import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import { POSTS } from "../../constants";

moment.locale("es");

export default function Posts({ articlesCount, articles }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("217.71.202.202:8000/api/articles");
  //     const newPosts = await res.json();
  //     console.log(newPosts.users)
  //     setPosts(newPosts);
  //   };
  //   // console.log(posts)

  //   fetchPosts();
  // }, []);

  return (
    <Layout>
      <Head>
        <title>Blog: Lista de artículos</title>
        <meta name="description" content="Blog creado para aprender Next.js, MongoDB y API REST" />
      </Head>
      <Title>{POSTS}</Title>

      <div className="grid">
        {articles.map(({ _id, title, text, createdAt, updatedAt, author }, i) => {
          return (
            <div className="card" key={i + 1}>
              <h3>
                {i + 1}.- {title}
              </h3>
              <span>Posted by: {author}.</span>
              <span>{moment(createdAt).format("LL")}.</span> Last update: <span>{moment(updatedAt).format("LL")}.</span>
              <p>
                {text.slice(0, 100)}...{" "}
                <Link href={"/posts/[_id]"} as={`/posts/${_id}`} key={i + 1}>
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
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://217.71.202.202:8000/api/articles/");
  const posts = await res.json();

  // const articles = posts.articles.map((doc) => {
  //   console.log(doc)

  //   article._id = `${articule._id}`;
  //   article.createdAt = moment(article.createdAt).format("LLL");
  //   article.updatedAt = moment(article.updatedAt).format("LLL");
  //   return article;
  // });

  return {
    props: {
      articlesCount: posts.totalItems,
      articles: posts.articles,
    },
  };
}
