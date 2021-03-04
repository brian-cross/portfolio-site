import spacing from "../styles/spacing";

export default function Work() {
  return (
    <>
      <div className="container">
        <h1>My Work</h1>
      </div>
      <style jsx>
        {`
          .container {
            ${spacing.page}
          }
        `}
      </style>
    </>
  );
}
