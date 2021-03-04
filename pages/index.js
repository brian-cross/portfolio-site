import { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Main() {
  const [homeIntroComplete, setHomeIntroComplete] = useState(false);
  return (
    <>
      <Header animateIn={homeIntroComplete} />
      <Home onIntroComplete={() => setHomeIntroComplete(true)} />
      <Work />
      <About />
      <Contact />
    </>
  );
}
