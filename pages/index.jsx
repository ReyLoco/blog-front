import Head from "next/head";
import Title from "../components/Title";
import { DESCRIPTION, HOME, HOMEDESC, TITLE } from "../constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {TITLE}: {HOMEDESC}
        </title>
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Title>{HOME}</Title>
      <p>Aprendamos lo qeu sea</p>
    </>
  );
}
