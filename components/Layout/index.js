import Navbar from "../Navbar";

export default function index({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>

      <style jsx>{`
        div {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 1.3rem;
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>

      <style jsx global>
        {`
          hrml,
          body {
            padding: 0;
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
