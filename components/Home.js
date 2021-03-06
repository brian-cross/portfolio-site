import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import spacing from "../styles/spacing";
import theme from "../styles/theme";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

export default function Home({ onVisible }) {
  const scrollPrompt = useRef();

  useEffect(() => {
    gsap.from(".animated-svg-text > path", {
      drawSVG: 0,
      autoAlpha: 0,
      xPercent: 25,
      duration: 1.5,
      ease: "power1.inOut",
      onComplete: () => {
        onVisible();
        revealScrollPrompt();
      },
      stagger: {
        amount: 1.5,
        from: "random",
      },
    });

    function revealScrollPrompt() {
      gsap.from(scrollPrompt.current, {
        yPercent: -10,
        ease: "power1.inOut",
        autoAlpha: 0,
        duration: 1.5,
      });
    }

    gsap.to([".heading-1-wrapper", ".heading-2-wrapper"], {
      opacity: 0,
      xPercent: -120,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".home",
        start: "top",
        end: "bottom",
        pin: ".headings",
        scrub: 1,
      },
    });

    gsap.to(scrollPrompt.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        start: "bottom bottom",
        end: "top 10%",
        pin: scrollPrompt.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section className="container home">
        <div className="headings">
          <div className="heading-1-wrapper">
            <svg
              viewBox="0 0 598.68 68.56"
              className="animated-svg-text heading-1"
              aria-label="Brian Cross"
              role="heading"
              aria-level="1"
            >
              <path d="M49.799 33q4.96 1.84 7.68 5.36t2.72 8.48q0 7.36-6.08 11.44-6.08 4-17.6 4H4.999v-56h29.92q11.2 0 16.88 4 5.76 4 5.76 10.64 0 3.92-2 7.04-1.92 3.12-5.76 5.04zm-26.24-13.52v8.32h8.8q6.16 0 6.16-4.16t-6.16-4.16zm11.36 29.6q6.24 0 6.24-4.4t-6.24-4.4h-11.36v8.8z" />
              <path d="M90.879 48.205h-5.12v14.08h-18.88v-56h26.96q7.76 0 13.52 2.56t8.88 7.36 3.12 11.2q0 6-2.72 10.48t-7.84 7.12l11.76 17.28h-20.16zm9.44-20.8q0-3.12-1.92-4.8-1.92-1.76-5.76-1.76h-6.88v13.12h6.88q3.84 0 5.76-1.68 1.92-1.76 1.92-4.88z" />
              <path d="M126.409 6.28h18.88v56h-18.88z" />
              <path d="M192.539 52.525h-21.28l-3.76 9.76h-19.2l24.48-56h18.56l24.48 56h-19.52zm-5.2-13.6l-5.44-14.08-5.44 14.08z" />
              <path d="M274.109 6.28v56h-15.52l-21.28-25.44v25.44h-18.4v-56h15.52l21.28 25.44V6.28z" />
              <path d="M336.299 63.565q-8.88 0-16-3.68-7.12-3.76-11.2-10.4-4-6.72-4-15.2t4-15.12q4.08-6.72 11.2-10.4 7.12-3.76 16-3.76 8.16 0 14.56 2.88t10.56 8.32l-11.92 10.64q-5.2-6.56-12.24-6.56-5.92 0-9.52 3.84-3.6 3.76-3.6 10.16t3.6 10.24q3.6 3.76 9.52 3.76 7.04 0 12.24-6.56l11.92 10.64q-4.16 5.44-10.56 8.32t-14.56 2.88z" />
              <path d="M390.879 48.205h-5.12v14.08h-18.88v-56h26.96q7.76 0 13.52 2.56t8.88 7.36 3.12 11.2q0 6-2.72 10.48t-7.84 7.12l11.76 17.28h-20.16zm9.44-20.8q0-3.12-1.92-4.8-1.92-1.76-5.76-1.76h-6.88v13.12h6.88q3.84 0 5.76-1.68 1.92-1.76 1.92-4.88z" />
              <path d="M455.769 63.565q-9.04 0-16.24-3.76t-11.28-10.4q-4.08-6.72-4.08-15.12t4.08-15.04q4.08-6.72 11.28-10.48t16.24-3.76 16.24 3.76 11.28 10.48q4.08 6.64 4.08 15.04t-4.08 15.12q-4.08 6.64-11.28 10.4t-16.24 3.76zm0-15.28q3.52 0 6.32-1.68 2.88-1.76 4.56-4.88 1.68-3.2 1.68-7.44t-1.68-7.36q-1.68-3.2-4.56-4.88-2.8-1.76-6.32-1.76t-6.4 1.76q-2.8 1.68-4.48 4.88-1.68 3.12-1.68 7.36t1.68 7.44q1.68 3.12 4.48 4.88 2.88 1.68 6.4 1.68z" />
              <path d="M515.099 63.565q-6.96 0-13.6-1.52-6.56-1.6-10.8-4.24l6.08-13.76q4 2.32 8.96 3.76 4.96 1.36 9.52 1.36 3.92 0 5.6-.72 1.68-.8 1.68-2.32 0-1.76-2.24-2.64-2.16-.88-7.2-1.92-6.48-1.36-10.8-2.88-4.32-1.6-7.52-5.12-3.2-3.6-3.2-9.68 0-5.28 2.96-9.6t8.8-6.8q5.92-2.48 14.32-2.48 5.76 0 11.28 1.28 5.6 1.2 9.84 3.6l-5.68 13.68q-8.24-4.16-15.6-4.16-7.28 0-7.28 3.52 0 1.68 2.16 2.56 2.16.8 7.12 1.76 6.4 1.2 10.8 2.8 4.4 1.52 7.6 5.04 3.28 3.52 3.28 9.6 0 5.28-2.96 9.6-2.96 4.24-8.88 6.8-5.84 2.48-14.24 2.48z" />
              <path d="M567.599 63.565q-6.96 0-13.6-1.52-6.56-1.6-10.8-4.24l6.08-13.76q4 2.32 8.96 3.76 4.96 1.36 9.52 1.36 3.92 0 5.6-.72 1.68-.8 1.68-2.32 0-1.76-2.24-2.64-2.16-.88-7.2-1.92-6.48-1.36-10.8-2.88-4.32-1.6-7.52-5.12-3.2-3.6-3.2-9.68 0-5.28 2.96-9.6t8.8-6.8q5.92-2.48 14.32-2.48 5.76 0 11.28 1.28 5.6 1.2 9.84 3.6l-5.68 13.68q-8.24-4.16-15.6-4.16-7.28 0-7.28 3.52 0 1.68 2.16 2.56 2.16.8 7.12 1.76 6.4 1.2 10.8 2.8 4.4 1.52 7.6 5.04 3.28 3.52 3.28 9.6 0 5.28-2.96 9.6-2.96 4.24-8.88 6.8-5.84 2.48-14.24 2.48z" />
            </svg>
          </div>
          <div className="heading-2-wrapper">
            <svg
              viewBox="0 0 766.03 68.56"
              className="animated-svg-text heading-2"
              aria-label="Web Developer"
              role="heading"
              aria-level="2"
            >
              <path d="M99.882 6.28l-17.92 56h-20.24l-9.04-29.92-9.52 29.92h-20.24l-17.92-56h19.44l9.76 31.84 10.32-31.84h17.36l9.76 32.24 10.32-32.24z" />
              <path d="M150.472 48.04v14.24h-46.56v-56h45.52v14.24h-26.96v6.56h23.68v13.6h-23.68v7.36z" />
              <path d="M202.622 33q4.96 1.84 7.68 5.36 2.72 3.52 2.72 8.48 0 7.36-6.08 11.44-6.08 4-17.6 4h-31.52v-56h29.92q11.2 0 16.88 4 5.76 4 5.76 10.64 0 3.92-2 7.04-1.92 3.12-5.76 5.04zm-26.24-13.52v8.32h8.8q6.16 0 6.16-4.16t-6.16-4.16zm11.36 29.6q6.24 0 6.24-4.4t-6.24-4.4h-11.36v8.8z" />
              <path d="M243.762 6.28h27.6q9.36 0 16.48 3.44 7.2 3.36 11.12 9.68 4 6.32 4 14.88t-4 14.88q-3.92 6.32-11.12 9.76-7.12 3.36-16.48 3.36h-27.6zm26.8 41.28q6.08 0 9.68-3.44 3.68-3.52 3.68-9.84t-3.68-9.76q-3.6-3.52-9.68-3.52h-7.92v26.56z" />
              <path d="M356.412 48.04v14.24h-46.56v-56h45.52v14.24h-26.96v6.56h23.68v13.6h-23.68v7.36z" />
              <path d="M422.822 6.28l-23.68 56h-18.56l-23.68-56h20.32L390.582 39l13.68-32.72z" />
              <path d="M471.102 48.04v14.24h-46.56v-56h45.52v14.24h-26.96v6.56h23.68v13.6h-23.68v7.36z" />
              <path d="M478.452 6.28h18.88v41.36h25.28v14.64h-44.16z" />
              <path d="M556.402 63.56q-9.04 0-16.24-3.76t-11.28-10.4q-4.08-6.72-4.08-15.12 0-8.4 4.08-15.04 4.08-6.72 11.28-10.48T556.402 5t16.24 3.76 11.28 10.48q4.08 6.64 4.08 15.04 0 8.4-4.08 15.12-4.08 6.64-11.28 10.4t-16.24 3.76zm0-15.28q3.52 0 6.32-1.68 2.88-1.76 4.56-4.88 1.68-3.2 1.68-7.44t-1.68-7.36q-1.68-3.2-4.56-4.88-2.8-1.76-6.32-1.76t-6.4 1.76q-2.8 1.68-4.48 4.88-1.68 3.12-1.68 7.36t1.68 7.44q1.68 3.12 4.48 4.88 2.88 1.68 6.4 1.68z" />
              <path d="M621.812 6.28q7.76 0 13.52 2.56t8.88 7.36q3.12 4.8 3.12 11.2 0 6.4-3.12 11.2-3.12 4.8-8.88 7.36t-13.52 2.56h-8.08v13.76h-18.88v-56zm-1.2 27.68q3.84 0 5.76-1.68 1.92-1.76 1.92-4.88t-1.92-4.8q-1.92-1.76-5.76-1.76h-6.88v13.12z" />
              <path d="M700.012 48.04v14.24h-46.56v-56h45.52v14.24h-26.96v6.56h23.68v13.6h-23.68v7.36z" />
              <path d="M731.352 48.2h-5.12v14.08h-18.88v-56h26.96q7.76 0 13.52 2.56t8.88 7.36q3.12 4.8 3.12 11.2 0 6-2.72 10.48t-7.84 7.12l11.76 17.28h-20.16zm9.44-20.8q0-3.12-1.92-4.8-1.92-1.76-5.76-1.76h-6.88v13.12h6.88q3.84 0 5.76-1.68 1.92-1.76 1.92-4.88z" />
            </svg>
          </div>
        </div>
        <div className="scroll-prompt" ref={scrollPrompt}>
          <svg aria-hidden="true" height="2rem" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </div>
      </section>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            min-height: 100vh;
            min-height: -webkit-fill-available;
            padding: 0 5vw 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: ${theme.colors.sectionBgMain};

            .headings {
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              width: 100%;
              padding: 30vh 0;
              flex-grow: 1;
            }

            .animated-svg-text {
              position: relative;

              path {
                visibility: hidden;
                fill: none;
                stroke: ${theme.colors.primary};
              }
            }

            .heading-1 {
              margin-bottom: 3rem;
              height: clamp(2.5rem, 6vw, 6rem);
              stroke-width: 1.2;
            }

            .heading-2 {
              height: clamp(2.75rem, 8vw, 8rem);
              stroke-width: 0.9;
            }

            .scroll-prompt {
              visibility: hidden;
              color: ${theme.colors.lightGrey};
            }
          }
        `}
      </style>
    </>
  );
}
