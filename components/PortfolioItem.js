import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function PortfolioItem({ imgSrc, heading, description, link }) {
  const itemRef = useRef(null);
  const mockupRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const styleTag = document.createElement("style");
    const clippingBoxClass = `split-text-clipping-box-${Math.floor(
      Math.random() * 100000
    )}`;
    styleTag.innerText = `.${clippingBoxClass} { overflow: hidden; }`;

    document.querySelector("head").appendChild(styleTag);

    const split = new SplitText(paragraphRef.current, {
      type: "words chars",
      wordsClass: clippingBoxClass,
    });

    const triggerDefaults = {
      start: "top bottom",
      end: "top 80%",
      toggleActions: "none play reverse none",
    };

    gsap.from(mockupRef.current, {
      autoAlpha: 0,
      scale: 1.1,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: mockupRef.current,
        ...triggerDefaults,
      },
    });

    gsap.from(headingRef.current, {
      autoAlpha: 0,
      scale: 1.1,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        ...triggerDefaults,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: paragraphRef.current,
          ...triggerDefaults,
        },
      })
      .from(split.chars, {
        yPercent: -100,
        stagger: {
          amount: 1.2,
        },
      })
      .from(linkRef.current, {
        autoAlpha: 0,
        scale: 1.1,
        transformOrigin: "top center",
        ease: "power1.out",
        duration: 1,
      });
  }, []);
  return (
    <>
      <div className="portfolio-item" ref={itemRef}>
        <div className="mockup" ref={mockupRef}>
          <Image src={imgSrc} width={1200} height={800} />
        </div>
        <div className="description">
          <h2 ref={headingRef}>{heading}</h2>
          <p ref={paragraphRef}>{description}</p>
          <a href={link} target="_blank" ref={linkRef}>
            View Project
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .portfolio-item {
            display: flex;
            flex-wrap: wrap-reverse;
            align-items: center;
            justify-content: space-evenly;
            width: 100%;
            margin: 4rem 0;
            z-index: 1;

            .mockup,
            .description {
              padding: 3rem 2rem;
              flex: 1 1 32rem;
              max-width: 50rem;
            }

            .mockup {
              //background: rgba($color: #fff, $alpha: 0.8);
            }

            .description {
              h2 {
                display: inline-block;
                margin: 0 0 3rem;
              }

              a {
                display: inline-block;
                margin-top: 3rem;
                font-weight: bold;
              }
            }
          }
        `}
      </style>
    </>
  );
}
