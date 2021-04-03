import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import spacing from "../styles/spacing";
import theme from "../styles/theme";
import scrollReveal from "../utils/scrollReveal";

gsap.registerPlugin(SplitText);

export default function PortfolioItem({
  heading,
  imgSrc,
  description,
  link,
  tags,
}) {
  const graphicRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const graphic = graphicRef.current;
    const text = new SplitText(textRef.current.querySelectorAll("p, a"), {
      type: "lines",
    });

    const graphicTween = gsap.from(graphic, {
      autoAlpha: 0,
      //yPercent: -10,
      scale: 1.05,
      duration: 1,
      ease: "power1.inOut",
      paused: true,
    });

    const textTween = gsap.from(text.lines, {
      opacity: 0,
      rotate: 1.5,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      paused: true,
    });

    scrollReveal(
      graphic,
      () => graphicTween.timeScale(1).play(),
      () => graphicTween.timeScale(2).reverse()
    );

    scrollReveal(
      textRef.current,
      () => textTween.timeScale(1).play(),
      () => textTween.timeScale(2).reverse()
    );
  }, []);

  return (
    <>
      <div className="portfolio-item">
        <div className="graphic" ref={graphicRef}>
          <h2>
            <span className="heading">{heading}</span>
          </h2>
          <div className="image">
            <Image src={imgSrc} width={700} height={467} />
          </div>
          {tags ? (
            <div className="tags">
              {tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="text" ref={textRef}>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="link">
            <a href={link} target="_blank">
              View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .portfolio-item {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            margin-top: 15vh;

            .graphic {
              position: relative;

              h2 {
                margin: 0;

                .heading {
                  position: absolute;
                  left: 5%;
                  top: -1em;
                  z-index: 1;
                  padding: 0 0.5em;
                  border-radius: 0.25em;
                }
              }

              .tags {
                position: absolute;
                right: 5%;
                bottom: -0.4em;
              }

              .tag {
                padding: 0.25em 1em;
                border-radius: 0.5em;
              }

              .tag + .tag {
                margin-left: 1em;
              }
            }

            .text {
              margin-top: 5vh;
              max-width: ${spacing.portfolioImageWidth};
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;

              .link {
                font-weight: bold;
              }
            }

            .heading,
            .tag {
              text-transform: uppercase;
              font-weight: bold;
              background: ${theme.colors.mediumDark};
            }
          }
        `}
      </style>
    </>
  );
}
