import spacing from "../styles/spacing";

export default function Contact() {
  return (
    <>
      <div className="container contact">
        <h1>Contact Me</h1>
      </div>
      <style jsx>{`
        .container {
          ${spacing.page}
          height: 100vh;
        }
      `}</style>
    </>
  );
}
