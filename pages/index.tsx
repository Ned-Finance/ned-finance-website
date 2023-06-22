import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Features from "../components/features";


export default () => {
  return (
    <>
      <Head>
        <title>Ned Finance Wallet</title>
        <meta
          name="description"
          content="Ned Finance is a DeFi wallet that enables payments, investments, savings, nfts in a safe environment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Ned Benefits"
        title="Web3 and DeFi for everybody">
        Web3 and DeFi shouldn't be hard, we are focused on removing the
        difficulties from blockchain world while giving new tools to the users
        to empower them in their finances.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="A DeFi wallet for all your finances"
        title="Learn what NED + web3/blockchain can do for you">
        Web3 is about freedom, blockchain is about security and privacy and we
        know how to put those powers in the palm of your hand. A DeFi wallet
        focused on your experience and your finances.
      </SectionTitle>
      <Video /> */}
      <SectionTitle
        pretitle="Why a DeFi wallet?"
        title="The most fundamental piece to interact with web3 is a wallet">
        DeFi is a new world of opportunities and if you want to interact with a
        dapp, send money or pay for something, the fundamental piece in the
        process is the wallet, that's why we believe you should
        <strong className="text-ned-green"> own your keys</strong>.
      </SectionTitle>
      {/* <Testimonials /> */}
      <Features></Features>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        You have questions and we have answers.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}
