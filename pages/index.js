import { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";

export default function Main() {
  const [homeIntroComplete, setHomeIntroComplete] = useState(false);
  return (
    <>
      <Header animateIn={homeIntroComplete} />
      <Home onIntroComplete={() => setHomeIntroComplete(true)} />
    </>
  );
}
