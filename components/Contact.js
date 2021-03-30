import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import useAnimatedHeading from "../hooks/useAnimatedHeading";
import spacing from "../styles/spacing";
import theme from "../styles/theme";
import ContactPageBackground from "./ContactPageBackground";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Contact() {
  const ref = useAnimatedHeading();
  const form = useRef();
  const textRef = useRef();

  useEffect(() => {
    const inputs = form.current.querySelectorAll("input, textarea");
    const labels = form.current.querySelectorAll("label");
    const defaults = { duration: 0.3 };

    form.current.addEventListener("submit", e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      for (let entry of formData.entries()) console.log(entry[0], entry[1]);
      e.target.reset();
      labelDown(labels);
    });

    inputs.forEach((input, i) => {
      input.addEventListener("focus", () => labelUp(labels[i]));

      input.addEventListener("blur", () => {
        if (input.value === "") labelDown(labels[i]);
      });
    });

    function labelUp(label) {
      gsap.to(label, {
        yPercent: -160,
        color: theme.colors.primary,
        ...defaults,
      });
    }

    function labelDown(label) {
      gsap.to(label, {
        yPercent: 0,
        color: theme.colors.lightGrey,
        ...defaults,
      });
    }
  }, []);

  useEffect(() => {
    const text = new SplitText(textRef.current, { type: "lines" });

    const textTween = gsap.from(text.lines, {
      opacity: 0,
      rotate: 1.5,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",
      end: "top 70%",
      onLeave: () => textTween.timeScale(1).play(),
      onLeaveBack: () => textTween.timeScale(2).reverse(),
    });
  }, []);

  return (
    <>
      <section className="container contact">
        <ContactPageBackground />
        <h1 ref={ref}>Get in touch</h1>
        <div className="content">
          <p ref={textRef}>
            Let’s discuss your project! Send me a message and I’ll get back to
            you within one business day.
          </p>
          <div className="form-container">
            <form ref={form}>
              <div className="column">
                <div className="input-wrapper">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="description">
                    Tell me about your project...
                  </label>
                  <textarea id="description" name="description" />
                </div>
                <div className="input-wrapper button-wrapper">
                  <button>
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .container {
            ${spacing.page}
            min-height: 100vh;
            position: relative;
            padding: 25vh 5vw;
            display: flex;
            flex-direction: column;

            .content {
              margin: 5vh -1em -1em;
              display: flex;
              flex-direction: column;
              max-width: 50rem;

              & > * {
                margin: 0 1em 2em;
              }

              p {
                max-width: 75ch;
              }

              .form-container {
                flex-grow: 1;
                flex-basis: 40rem;
                display: flex;
                align-items: center;
                justify-content: center;

                form {
                  width: 100%;

                  .column {
                    display: flex;
                    flex-direction: column;
                    margin: -1.5em;

                    .input-wrapper {
                      position: relative;
                      margin: 1.5em;
                    }

                    label {
                      position: absolute;
                      top: 0.9em;
                      left: 1.1rem;
                    }

                    input {
                      height: 4rem;
                    }

                    textarea {
                      height: 12rem;
                    }

                    input,
                    textarea {
                      background: ${theme.colors.mediumDark};
                      border: 1px solid ${theme.colors.lightGrey};
                      border-radius: 0.125em;
                      padding: 1rem;
                      width: 100%;
                    }

                    .button-wrapper {
                      align-self: center;
                      button {
                        color: ${theme.colors.white};
                        background: ${theme.colors.accent};
                        cursor: pointer;
                        border: none;
                        border-radius: 0.25em;
                        padding: 0.5em 2em;
                        font-weight: bold;
                        font-size: 1.75rem;
                      }
                    }
                  }
                }
              }
            }
          }
        `}
      </style>
    </>
  );
}
