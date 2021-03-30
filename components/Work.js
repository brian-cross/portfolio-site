import spacing from "../styles/spacing";
import PortfolioItem from "./PortfolioItem";
import useAnimatedHeading from "../hooks/useAnimatedHeading";
import ProjectsPageBackground from "./ProjectsPageBackground";
import theme from "../styles/theme";

export default function Work() {
  const ref = useAnimatedHeading();

  return (
    <>
      <section className="container work">
        <ProjectsPageBackground />
        <h1 ref={ref}>Projects</h1>
        <div className="portfolio-items">
          <PortfolioItem
            imgSrc="/facecall-orange-cropped.png"
            heading="FaceCall"
            description="FaceCall is a browser based video calling app. Built with React
              and WebRTC on the frontend and a custom Node.JS server on the
              backend. Uses WebRTC signaling infrastructure from Twilio for
              initiating the peer to peer video link."
            tags={["React", "WebRTC", "Node.JS"]}
            link="https://www.facecall.app"
          />
        </div>
        <div className="portfolio-items">
          <PortfolioItem
            imgSrc="/facecall-orange-cropped.png"
            heading="FaceCall"
            description="FaceCall is a browser based video calling app. Built with React
              and WebRTC on the frontend and a custom Node.JS server on the
              backend. Uses WebRTC signaling infrastructure from Twilio for
              initiating the peer to peer video link."
            tags={["React", "WebRTC", "Node.JS"]}
            link="https://www.facecall.app"
          />
        </div>
      </section>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            min-height: 100vh;
            position: relative;
            margin-top: -5vmin;
            padding: 20vh 5vw;
            display: flex;
            flex-direction: column;
            clip-path: polygon(
              0% 2vmin,
              30% 5vmin,
              100% 0%,
              100% 100%,
              0% 100%
            );
            background: ${theme.colors.sectionBgWork};

            .portfolio-items {
              //margin-top: 10vh;
            }
          }
        `}
      </style>
    </>
  );
}
