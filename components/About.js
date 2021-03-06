import spacing from "../styles/spacing";

export default function About() {
  return (
    <>
      <div className="container about">
        <h1>About</h1>
      </div>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}
