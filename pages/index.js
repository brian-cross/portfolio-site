import { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Main() {
  const [homeVisible, setHomeVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  return (
    <>
      <Header
        animateIn={homeVisible}
        onVisible={() => setHeaderVisible(true)}
      />
      <Home onVisible={() => setHomeVisible(true)} />
      {headerVisible ? <About /> : null}
      {headerVisible ? <Work /> : null}
      {headerVisible ? <Contact /> : null}
      {headerVisible ? <Footer /> : null}
    </>
  );
}
