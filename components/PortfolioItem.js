import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import spacing from "../styles/spacing";
import theme from "../styles/theme";

export default function PortfolioItem({
  heading,
  imgSrc,
  description,
  link,
  tags,
}) {
  return (
    <>
      <div className="portfolio-item">
        <div className="graphic">
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
        <div className="text">
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
