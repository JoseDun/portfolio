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
        <meta name="description" content="Portfolio de José Dun full-stack developer e ingeniero de telecomunicaciones." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="José Dun | Portfolio" key="ogtitle" />
        <meta property="og:description" content="Portfolio de José Dun full-stack developer e ingeniero de telecomunicaciones." key="ogdesc" />
        {/*     <meta property="og:image" content="URL de tu imagen" key="ogimage" /> */}
        <meta property="og:url" content="www.josedun.online" key="ogurl" />
      </Head>
      <Hero />
      <About />
      <Certifications {...data} />
      <Contact />
    </>
  );
};
export async function getStaticProps() {
  const data = getCertsData();
  //const dataPortfolio = getPortfolioData();

  return { props: { data } };
}

export default Home;
