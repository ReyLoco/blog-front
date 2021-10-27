import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import Title from "../../components/Title";
import { USERS_DET } from "../../constants";

export default function User({ user }) {
  const router = useRouter();

  if (router.isfallback) {
    return <div>CARGANDO...</div>;
  }

  return (
    <>
      <Head>
        <title>Blog: Detalle de usuario</title>
        <meta name="description" content="Blog creado para aprender Next.js, MongoDB y API REST" />
      </Head>
      <Title>
        {USERS_DET} con ID: {user._id}
      </Title>
      <div className="card">
        <Image src={`/images/${user._id}.jpg`} width={400} height={600}></Image>
        <p>Nombre: {user.name}</p>
        <p>Apellidos: {user.surname}</p>
        <p>Email: {user.email}</p>
        <p>Alta: {user.createdAt}</p>
        <p>Modificación: {user.updatedAt}</p>
        <p>Dirección: {user.address}</p>
        <p>Población: {user.location}</p>
        <span>Provincia: {user.province} </span>
        <span>( {user.country} )</span>
      </div>

      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
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
export async function getStaticPaths() {
  const res = await fetch("http://217.71.202.202:8000/api/users");
  const users = await res.json();

  const paths = users.users.map((user) => {
    return { params: { id: user._id } };
  });
  //const paths = [{ params: { id: "61684ecd6f5fe4a708caf652" } }, { params: { id: "616937e5572b87eb8a2e2b8a" } }];
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://217.71.202.202:8000/api/users/${params.id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
