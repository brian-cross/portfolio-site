import BackgroundWrapper from "./BackgroundWrapper";

export default function ContactPageBackground() {
  return (
    <>
      <BackgroundWrapper>
        <svg viewBox="0 0 1000 1000">
          <path
            d="M508.691 0q144.023 0 255.36 62.772 112.356 61.69 173.646 168.831 62.307 107.142 62.307 237.015 0 99.567-32.687 170.995-31.665 70.346-86.823 107.141-54.137 35.715-120.53 35.715-58.224 0-99.08-23.81-40.857-23.81-62.307-70.346-44.943 94.155-155.259 94.155-56.178 0-106.228-32.467-49.03-33.55-79.675-95.237-30.643-61.69-30.643-141.774t29.622-140.693q30.643-61.69 79.674-94.155 50.05-33.55 107.253-33.55 80.696 0 125.638 53.03v-43.289h196.119v309.524q0 59.524 39.835 59.524 24.515 0 37.794-33.55 14.3-33.55 14.3-117.965 0-97.404-43.922-173.162-42.901-75.758-122.572-117.965-78.65-43.288-181.817-43.288T325.86 185.069q-79.674 46.537-123.596 129.87-43.922 82.25-43.922 183.985 0 104.978 42.9 188.31 43.923 82.251 122.573 128.788 78.65 46.537 180.796 46.537 107.253 0 206.333-47.618l42.901 133.118q-45.964 23.81-114.402 37.878-67.414 14.07-134.832 14.07-150.151 0-265.574-66.017-114.403-64.934-176.71-178.573Q.02 640.697.02 498.923q0-139.61 62.307-253.25Q125.657 132.036 241.08 66.02 356.504.003 508.7.003zm-9.193 612.543q32.686 0 53.116-25.974t20.43-73.594-20.43-72.51q-20.428-25.974-53.116-25.974-32.686 0-53.116 25.974-19.407 24.892-19.407 72.51t19.407 73.594q20.429 25.974 53.116 25.974z"
            fill="#fff"
            fillOpacity="0.05"
            aria-hidden="true"
          />
        </svg>
      </BackgroundWrapper>
      <style jsx>
        {`
          svg {
            position: absolute;
            top: 2%;
            height: 96%;
            max-width: 100%;
            right: -10%;
          }
        `}
      </style>
    </>
  );
}