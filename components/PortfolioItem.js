import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioItem({ imgSrc, heading, description, link }) {
  let portfolioItem = useRef();

  useEffect(() => {
    gsap.to(portfolioItem, {
      autoAlpha: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: portfolioItem,
        start: "top 75%",
        end: "top center",
        toggleActions: "none play none reverse",
        // markers: true,
      },
    });
  }, []);
  return (
    <>
      <div className="portfolio-item" ref={node => (portfolioItem = node)}>
        <div className="mockup">
          <Image src={imgSrc} width={2030} height={1216} />
        </div>
        <div className="description">
          <h2>{heading}</h2>
          <p>
            {description}
            <a href={link} target="_blank">
              Visit Site
            </a>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .portfolio-item {
            visibility: hidden;
            display: flex;
            flex-wrap: wrap-reverse;
            justify-content: space-evenly;
            width: 100%;
            z-index: 1;

            .mockup,
            .description {
              margin: 4rem 1rem 0;
              flex: 1 1 32rem;
              max-width: 50rem;
            }

            .description {
              h2 {
                margin: 0 0 3rem;
              }

              a {
                display: block;
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
