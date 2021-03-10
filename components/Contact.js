import useStrokeText from "../hooks/useStrokeText";
import spacing from "../styles/spacing";

export default function Contact() {
  const ref = useStrokeText();
  return (
    <>
      <section className="container contact">
        <h1 ref={ref}>Get in touch</h1>
      </section>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            min-height: 100vh;
          }
        `}
      </style>
    </>
  );
}
