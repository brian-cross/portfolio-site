import Image from "next/image";
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
              {tags.map(tag => (
                <span className="tag">{tag}</span>
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
              View Project{" "}
              <img src="/external-link-alt-solid.svg" height="16"></img>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .portfolio-item {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;
            @media screen and (min-width: 1000px) {
              flex-direction: row;
            }

            .graphic {
              position: relative;
              flex-shrink: 1;

              h2 {
                margin: 0;

                .heading {
                  position: absolute;
                  left: 5%;
                  top: -0.6em;
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
              color: ${theme.colors.white};
              flex-shrink: 1;
              margin-top: 5vh;
              max-width: ${spacing.portfolioImageWidth};
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              @media screen and (min-width: 1000px) {
                flex-grow: 1;
                flex-basis: 40rem;
                margin-top: 0;
                margin-left: 5vw;
              }

              .link {
                font-weight: bold;
              }
            }

            .heading,
            .tag {
              text-transform: uppercase;
              font-weight: bold;
              color: ${theme.colors.white};
              background: ${theme.colors.mediumDark};
            }
          }
        `}
      </style>
    </>
  );
}
