import Head from "next/head";

import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Certifications from "../components/UI/Certifications";
import Contact from "../components/UI/Contact";
import { getCertsData } from "../components/data/certs";
import { getPortfolioData } from "../components/data/portfolio";

const Home = (data) => {
  return (
    <>
      <Head>
        <title>José Dun | Portfolio</title>
        <meta
          name="description"
          content="Portfolio de José Dun frontend developer e ingeniero de telecomunicaciones."
        />
      </Head>
      <Hero />
      <Portfolio {...data} />
      <About />
      <Certifications {...data} />
      <Contact />
    </>
  );
};
export async function getStaticProps() {
  const data = getCertsData();
  const dataPortfolio = getPortfolioData();

  return { props: { data, dataPortfolio } };
}

export default Home;
