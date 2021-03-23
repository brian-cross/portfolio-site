import BackgroundWrapper from "./BackgroundWrapper";

export default function ProjectsPageBackground() {
  return (
    <>
      <BackgroundWrapper>
        <svg viewBox="0 0 1345 1048">
          <g fill="#fff" fillOpacity=".05">
            <path d="m531.5 65.357c-11.978-44.693-63.92-74.684-108.61-62.709l-357.53 95.804c-44.692 11.975-74.682 63.922-62.707 108.62l95.801 357.54c5.9881 22.346 19.424 42.697 43.035 56.329 23.611 13.632 43.231 12.367 70.299 9.1058 44.692-11.975 74.682-63.922 62.707-108.61l-73.846-275.61 275.59-73.849c41.973-7.2531 69.229-54.477 55.261-106.62z" />
            <path d="m1004.5 325.83c-26.876-40.701-79.547-58.522-120.25-31.648l-516.73 306.12c-40.701 26.874-58.521 79.55-31.648 120.25 11.441 12.901 18.16 23.077 32.328 31.256 28.336 16.359 60.12 15.824 87.916 0.39195l516.74-306.12c45.423-24.147 58.521-79.551 31.645-120.25z" />
            <path d="m1244.6 477.05c-11.968-44.693-63.92-74.684-108.61-62.709-44.683 11.975-74.678 63.922-62.7 108.62l73.848 275.61-275.61 73.849c-44.693 11.976-74.678 63.922-62.7 108.61 5.9791 22.347 19.417 42.705 43.033 56.333 18.887 10.909 43.233 12.368 70.299 9.1088l357.53-95.808c44.693-11.974 74.678-63.92 62.7-108.61z" />
          </g>
        </svg>
      </BackgroundWrapper>
      <style jsx>
        {`
          svg {
            position: absolute;
            top: 2%;
            height: 96%;
            max-width: 100%;
            right: 1%;
          }
        `}
      </style>
    </>
  );
}