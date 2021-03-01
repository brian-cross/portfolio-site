import { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";

export default function Main() {
  const [homeComplete, setHomeComplete] = useState(false);
  return (
    <>
      <Header animateIn={homeComplete} />
      <Home onSplashComplete={() => setHomeComplete(true)} />
    </>
  );
}
