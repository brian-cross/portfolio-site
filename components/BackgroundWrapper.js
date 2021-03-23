export default function BackgroundWrapper({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
      <style jsx>
        {`
          .wrapper {
            position: absolute;
            visibility: hidden;
            overflow: hidden;
            width: 100vw;
            height: 100%;
            left: -5vw;
            top: 0;

            @media screen and (min-width: 1000px) {
              visibility: visible;
            }
          }
        `}
      </style>
    </>
  );
}
