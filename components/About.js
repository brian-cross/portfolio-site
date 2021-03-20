import Prism from "prismjs";
import { useEffect } from "react";
import useAnimatedHeading from "../hooks/useAnimatedHeading";
import spacing from "../styles/spacing";
import PageSeparator from "./PageSeparator";

export default function About() {
  const ref = useAnimatedHeading();

  const aboutMe = `function aboutMe() {
  return {
    firstName: "Brian",
    lastName: "Cross",

    location: {
      city: "Edmonton",
      province: "Alberta",
      country: "Canada",
    },

    technologies: [
      "HTML", "CSS", "JavaScript", "React", "Next.js", "SASS", "GSAP", "Framer Motion", "Node.js",
    ],

    description: "Hey, I'm Brian. I'm a web developer from Canada. I love building beautiful, performant websites that are accessible to all users. I also enjoy programming fun and interesting user interfaces with animation libraries such as GSAP (GreenSock Animation Platform) and Framer Motion.",
  };
};`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <section className="container about">
        <PageSeparator />
        <h1 ref={ref}>About Me</h1>
        <div className="content">
          <pre>
            <code className="language-js">{aboutMe}</code>
          </pre>
        </div>
      </section>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            min-height: 100vh;
            position: relative;
            padding: 5vh 0;
            display: flex;
            flex-direction: column;

            .content {
              flex-grow: 1;
              display: flex;
              align-items: center;
            }

            pre {
              border-radius: 1rem;
              max-width: 70rem;

              code {
                white-space: break-spaces;
              }
            }
          }
        `}
      </style>
    </>
  );
}
