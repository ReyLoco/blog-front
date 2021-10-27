import Head from "next/head";
import Link from "next/link";
import Title from "../../components/Title";
import { DESCRIPTION, TITLE, USERS } from "../../constants";

export default function Users({ users }) {
  return (
    <>
      <Head>
        <title>{TITLE}: {USERS}</title>
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Title>{USERS}</Title>
      <div className="grid">
        {users.map(({ _id, name, surname, email, createdAt, updatedAt, address, location, province, country }, i) => {
          return (
            <div className="card" key={i + 1}>
              <Link href={"/users/[_id]"} as={`/users/${_id}`} >
                <div>
                  <h3>
                    <a>
                      {name} {surname}
                    </a>
                  </h3>

                  <p>Email: {email}</p>
                  <p>Alta: {createdAt}</p>
                  <p>Modificación: {updatedAt}</p>
                  <p>Dirección: {address}</p>
                  <p>Población: {location}</p>
                  <span>Provincia: {province} </span>
                  <span>( {country} )</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: 3rem;
          }
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

export async function getStaticProps() {
  const res = await fetch("http://217.71.202.202:8000/api/users/");
  const users = await res.json();

  return {
    props: {
      usersCount: users.totalItems,
      users: users.users,
    },
  };
}
