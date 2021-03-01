import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect, useRef } from "react";
import spacing from "../styles/spacing";

gsap.registerPlugin(SplitText);

export default function Home({ onSplashComplete }) {
  let headings = useRef();
  let chevronDown = useRef();

  useEffect(() => {
    const headingSplit = new SplitText(headings, { type: "chars" });
    let tickCounter = 0;

    const tl = gsap.timeline();

    tl.from(headingSplit.chars, {
      opacity: 0,
      yPercent: -25,
      stagger: 0.05,
      delay: 0.5,
      duration: 2,
      ease: "power4",
      onUpdate: () => {
        if (tickCounter++ === 90) {
          gsap.from(chevronDown, {
            autoAlpha: 0,
            yPercent: 50,
          });
          onSplashComplete();
        }
      },
      // onComplete: () => headingSplit.revert(),
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="headings" ref={node => (headings = node)}>
          <div>
            <h2>Brian Cross</h2>
            <h1>Web Developer</h1>
          </div>
        </div>
        <div className="chevron-down" ref={node => (chevronDown = node)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z"
            />
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: ${spacing.pageWidth};
            margin: 0 auto;

            .headings {
              display: flex;
              align-items: center;
              width: 100%;
              text-transform: uppercase;
              flex-grow: 1;

              h1 {
                font-size: clamp(3rem, 9vw, 8rem);
                margin: 2rem 0;
              }

              h2 {
                font-size: clamp(1.5rem, 5.6vw, 5rem);
                margin: 0;
              }
            }

            .chevron-down {
              position: relative;
              width: 5rem;
              bottom: 3rem;
              visibility: hidden;
            }
          }
        `}
      </style>
    </>
  );
}
