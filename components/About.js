import spacing from "../styles/spacing";

export default function About() {
  return (
    <>
      <div className="container">
        <h1>About</h1>
      </div>
      <style jsx>{`
        .container {
          ${spacing.page}
        }
      `}</style>
    </>
  );
}
