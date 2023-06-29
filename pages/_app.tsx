import { NextSeo } from "next-seo";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Ned Finance: All things finance, for DeFi. Payments platform and multichain wallet | %s"
        description="Ned Finance is an all in one platform for DeFi with the most advanced multi-chain wallet to take DeFi one step further, creating unique experiences while increasing the use cases of crypto."
        canonical="https://ned.finance/"
        openGraph={{
          url: 'https://ned.finance/',
          title: 'Ned Finance: All things finance, for DeFi. Payments platform and multichain wallet',
          description: 'Ned Finance is an all in one platform for DeFi with the most advanced multi-chain wallet to take DeFi one step further, creating unique experiences while increasing the use cases of crypto.',
          images: [
            {
              url: 'https://ned.finance/img/og.jpg',
              alt: 'Ned Finance: All things finance, for DeFi. Payments platform and multichain wallet',
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
