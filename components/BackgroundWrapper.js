import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundWrapper({ children }) {
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;
    gsap.to(target, {
      y: -(target.clientWidth + window.innerHeight / 10),
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="parallax" ref={ref}>
          <span>{children}</span>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            align-items: center;
            position: absolute;
            visibility: hidden;
            overflow: hidden;
            width: 100%;
            height: 100%;
            //left: -5vw;
            top: 0;
            z-index: -1;

            @media screen and (min-width: 1000px) {
              visibility: visible;
            }

            .parallax {
              flex-grow: 1;
              height: 100%;
              //max-height: 100vh;

              span {
                //margin: 0.25em 0;
                line-height: 0.8;
                font-size: 15vmax;
                font-weight: bold;
                white-space: nowrap;
                text-transform: uppercase;
                -webkit-text-stroke: 0.01em currentColor;
                -webkit-text-fill-color: rgba(0, 0, 0, 0);
                opacity: 0.05;
                position: absolute;
                top: 10vh;
                left: 100%;
                transform-origin: top left;
                transform: rotate(90deg);
              }
            }
          }
        `}
      </style>
    </>
  );
}
