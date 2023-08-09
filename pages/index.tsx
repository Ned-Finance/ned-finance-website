import Head from "next/head";
import Hero from "../components/home/hero";
import { Wallet } from "../components/home/wallet";
import Navbar from "../components/navbar";

export default () => {
	return (
		<>
			<Head>
				<title>Ned Finance Wallet</title>
				<meta
					name="description"
					content="Ned Finance is a DeFi wallet that enables payments, investments, savings, nfts in a safe environment."
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<Navbar />
			<Hero />
			<Wallet />
			{/* <SectionTitle
        pretitle="Ned Benefits"
        title="Web3 and DeFi for everybody">
        Web3 and DeFi shouldn't be hard, we are focused on removing the
        difficulties from the blockchain world while giving new tools to the
        users to empower them in their finances.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="A real DeFi wallet"
        title="Decentralized governance">
        Ned Finance is a fully decentralized, community-governed platform that
        enables holders to discuss the future of the platform, send proposals
        and vote for them.
      </SectionTitle>
      <FullWidthImage />
      <SectionTitle
        pretitle="Why a DeFi wallet?"
        title="The most fundamental piece to interact with web3 is a wallet">
        DeFi is a new world of opportunities and if you want to interact with a
        dapp, send money or pay for something, the fundamental piece in the
        process is the wallet, that's why we believe you should
        <strong className="text-ned-green"> own your keys</strong>.
      </SectionTitle>
      <Features></Features>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        You have questions and we have answers.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer /> */}
		</>
	);
};
