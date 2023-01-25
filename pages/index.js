import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Certifications from "../components/UI/Certifications";
import Contact from "../components/UI/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>José Dun</title>
      </Head>
      <Fragment>
        <Hero />
        <Portfolio />
        <About />
        <Certifications />
        <Contact />
      </Fragment>
    </>
  );
}
