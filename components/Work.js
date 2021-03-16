import spacing from "../styles/spacing";
import PortfolioItem from "./PortfolioItem";
import useAnimatedHeading from "../hooks/useAnimatedHeading";

export default function Work() {
  const ref = useAnimatedHeading();

  return (
    <>
      <section className="container work">
        <h1 ref={ref}>Projects</h1>
        <div className="portfolio-items">
          <PortfolioItem
            imgSrc="/facecall-medium-blue.png"
            heading="FaceCall"
            description="FaceCall is a browser based video calling app. Built with React
              and WebRTC on the frontend and a custom Node.JS server on the
              backend. Uses WebRTC signaling infrastructure from Twilio for
              initiating the peer to peer video link."
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
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 6rem 0;
          }
        `}
      </style>
    </>
  );
}
