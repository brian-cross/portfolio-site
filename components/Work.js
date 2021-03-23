import spacing from "../styles/spacing";
import PortfolioItem from "./PortfolioItem";
import useAnimatedHeading from "../hooks/useAnimatedHeading";
import PageSeparator from "./PageSeparator";
import ProjectsPageBackground from "./ProjectsPageBackground";

export default function Work() {
  const ref = useAnimatedHeading();

  return (
    <>
      <section className="container work">
        <ProjectsPageBackground />
        <PageSeparator />
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
          {/* <PortfolioItem
            imgSrc="/laptop-phone-mockup-facecall.png"
            heading="FaceCall"
            description="FaceCall is a browser based video calling app. Built with React
              and WebRTC on the frontend and a custom Node.JS server on the
              backend. Uses WebRTC signaling infrastructure from Twilio for
              initiating the peer to peer video link."
            link="https://www.facecall.app"
          />
          <PortfolioItem
            imgSrc="/laptop-phone-mockup-facecall.png"
            heading="FaceCall"
            description="FaceCall is a browser based video calling app. Built with React
              and WebRTC on the frontend and a custom Node.JS server on the
              backend. Uses WebRTC signaling infrastructure from Twilio for
              initiating the peer to peer video link."
            link="https://www.facecall.app"
          /> */}
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

            .portfolio-items {
              flex-grow: 1;
              margin-top: 5vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
}
