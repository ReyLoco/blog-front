import Form from "../components/Form";
import { ART_NEW, ART_NEW_DESC, BLOG } from "../constants";

export default function New() {
  const formData = {
    title: "",
    texto: "",
  };

  return (
    <>
      <Head>
        <title>
          {BLOG}: {ART_NEW}
        </title>
        <meta name="description" content={ART_NEW_DESC} />
      </Head>
      <Title>{ART_NEW}</Title>
      <div className="container">
        <h1 className="my-3">{ART_NEW}</h1>
        <Form formData={formData} />
      </div>
    </>
  );
}
