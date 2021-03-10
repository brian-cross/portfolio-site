import useStrokeText from "../hooks/useStrokeText";
import spacing from "../styles/spacing";

export default function About() {
  const ref = useStrokeText();

  return (
    <>
      <section className="container about">
        <h1 ref={ref}>About Me</h1>
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
