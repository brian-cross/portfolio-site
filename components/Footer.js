import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import spacing from "../styles/spacing";
import theme from "../styles/theme";
import TwitterIcon from "./TwitterIcon";
import CodePenIcon from "./CodePenIcon";
import GithubIcon from "./GithubIcon";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="contacts">
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div>Edmonton AB Canada</div>
          <div>
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <div>
            <a href="tel:+1-780-235-2335">+1-780-235-2335</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <a href="mailto:briancross.webdev@gmail.com">
              briancross.webdev@gmail.com
            </a>
          </div>
        </div>
        <div className="social-icons">
          <TwitterIcon />
          <CodePenIcon />
          <GithubIcon />
        </div>
        <p>
          &copy; {new Date().getFullYear()} Brian Cross
          <br />
          Built with React and Next.js
        </p>
      </footer>
      <style jsx>
        {`
          footer {
            ${spacing.page}
            min-height: 105vh;
            position: relative;
            margin-top: -5vmin;
            padding: 25vh 5vw 10vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            clip-path: polygon(0 0, 30% 5vmin, 100% 2vmin, 100% 100%, 0% 100%);
            background: ${theme.colors.footerBg};

            .contacts {
              display: grid;
              grid-template-columns: 5rem auto;
              gap: 1em;
            }

            .social-icons {
              flex-grow: 1;
              display: flex;
              align-items: flex-end;
            }

            p {
              margin: 3rem 0 0;
              font-size: 0.75em;
              line-height: 2;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
}
