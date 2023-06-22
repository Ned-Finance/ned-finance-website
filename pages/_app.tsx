import { NextSeo } from "next-seo";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Ned Finance: all in on multi-chain DeFi wallet, made easy | %s"
        description="Ned Finance is a next level wallet to take DeFi one step further, creating unique experiences while increasing the use cases of crypto."
        canonical="https://ned.finance/"
        openGraph={{
          url: 'https://ned.finance/',
          title: 'Ned Finance: all in on multi-chain DeFi wallet, made easy',
          description: 'Ned Finance is a next level wallet to take DeFi one step further, creating unique experiences while increasing the use cases of crypto.',
          images: [
            {
              url: 'https://ned.finance/img/og.jpg',
              alt: 'Ned Finance: all in on multi-chain DeFi wallet, made easy',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Ned Finance',
        }}
        twitter={{
          handle: '@NedFinance',
          site: '@NedFinance',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
