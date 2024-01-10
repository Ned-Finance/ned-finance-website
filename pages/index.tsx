import Head from "next/head";
import Community from "../components/home/community";
import Cta from "../components/home/cta";
import Hero from "../components/home/hero";
import More from "../components/home/more";
import Payments from "../components/home/payments";
import Wallet from "../components/home/wallet";

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

      <Hero />
      <Wallet />
      <Payments />
      <More />
      <Community />
      <Cta />
    </>
  );
};
