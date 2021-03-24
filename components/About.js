import useAnimatedHeading from "../hooks/useAnimatedHeading";
import spacing from "../styles/spacing";
import PageSeparator from "./PageSeparator";

export default function About() {
  const ref = useAnimatedHeading();

  return (
    <>
      <section className="container about">
        <PageSeparator />
        <h1 ref={ref}>Hey, I'm Brian</h1>
        <div className="content">
          <h2>I'm a front end web developer.</h2>
          <p>
            I build fast-loading websites that scale seamlessly to all screen
            sizes and are accessible to all users. I use HTML, CSS and
            JavaScript along with third party solutions such as React, SASS,
            GSAP, and Next.js.
            <p>I follow a simple set of design philosophies:</p>
          </p>
          <h2>Speed</h2>
          <p>
            Websites need to be fast. Really fast. Otherwise your users will hit
            the back button. I host my projects on providers such as Netlify and
            Vercel who leverage global content delivery networks to ensure your
            content is served with minimal delay. Next.js also pre-generates any
            static content ahead of time to eliminate server delay. The end
            result is a site that loads and navigagtes almost instantly.
          </p>
          <h2>Responsive Design</h2>
          <p>
            The web is increasingly being accessed from mobile devices. It's
            critical that websites are designed from the ground up to scale and
            adjust their layout to all screen sizes. I use mobile-first design
            and smooth scaling techniques to seamlessly fit my designs to any
            device. Image assets are optimized for various sizes and resolutions
            which minimizes loading time and doesn't waste the user's bandwidth.
          </p>
          <h2>Accessibility</h2>
          <p>
            A website is useless to someone if they can't navigate it or
            interact with it effectively due to a disability. I always have this
            in mind when building a site and I regularly run audits to ensure
            accessibility standards are met.
          </p>
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

            .content {
              flex-grow: 1;
              max-width: 75ch;

              h2 {
                font-size: clamp(2.5rem, 3.5vw, 3rem);
              }
            }
          }
        `}
      </style>
    </>
  );
}
