import spacing from "../styles/spacing";

export default function Work() {
  return (
    <>
      <div className="container work">
        <h1>My Work</h1>
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
