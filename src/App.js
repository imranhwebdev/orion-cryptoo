import Header from "./components/Header";
import Hero from './components/Hero';
import Brands from './components/Brands';
import Faq from './components/Faq';
import Investment_objectives from './components/InvestmentObjectives';
import RoundUp from './components/RoundUp';
import Whatamc from './components/WhatAmc';
import Capital_protected from './components/CapitalProtected';
import Inovative_trading from './components/InovativeTrading';
import Investment_universe from './components/InvestmentUniverse';
import Invest from './components/Invest';
import Roadmap from './components/Roadmap';
import TokenOrion from './components/TokenOrion';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Cta from './components/Cta';
import Tokenomics from './components/Tokenomics';
import Footer from "./components/Footer";

export const App = () => { 
  return (
      <>
      <Header />
      <Hero />
      <Investment_objectives />
      <RoundUp />
      <Whatamc />
      <Capital_protected />
      <Inovative_trading />
      <Investment_universe />
      <Portfolio />
      <Invest />
      <Roadmap />
      <TokenOrion />
      <Tokenomics />
      <Team />
      <Faq />
      <Brands />
      <Cta />
      <Footer />
      </>
  );
}

export default App;


