import useAnimatedHeading from "../hooks/useAnimatedHeading";
import spacing from "../styles/spacing";
import PageSeparator from "./PageSeparator";

export default function Contact() {
  const ref = useAnimatedHeading();
  return (
    <>
      <section className="container contact">
        <PageSeparator />
        <h1 ref={ref}>Get in touch</h1>
      </section>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            min-height: 100vh;
            position: relative;
            padding: 6rem 0;

            h1 {
              text-align: right;
            }
          }
        `}
      </style>
    </>
  );
}
