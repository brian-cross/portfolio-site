import useAnimatedHeading from "../hooks/useAnimatedHeading";
import spacing from "../styles/spacing";

export default function About() {
  const ref = useAnimatedHeading();

  return (
    <>
      <section className="container about">
        <h1 ref={ref}>About Me</h1>
        <p>Hey I'm Brian. I design and build websites and web apps.</p>
      </section>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            min-height: 100vh;

            h1 {
              text-align: right;
            }
          }
        `}
      </style>
    </>
  );
}
