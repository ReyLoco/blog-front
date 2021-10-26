import Head from "next/head";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { HOME } from "../constants";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog para aprender Next.js</title>
        <meta name="description" content="Blog creado para aprender Next.js, MongoDB y API REST" />
      </Head>
      <Title>{HOME}</Title>
      <p>Aprendamos lo qeu sea</p>
    </Layout>
  );
}
