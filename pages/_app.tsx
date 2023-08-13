import { NextSeo } from "next-seo";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		ReactGA.initialize("G-455KKGX9KE");
	}, []);
	return (
		<>
			<NextSeo
				title="Ned Finance: All things finance, for DeFi. Payments platform and multichain wallet | %s"
				description="Ned Finance is an all in one platform for DeFi with the most advanced multi-chain wallet to take DeFi one step further, creating unique experiences while increasing the use cases of crypto."
				canonical="https://ned.finance/"
				openGraph={{
					url: "https://ned.finance/",
					title:
						"Ned Finance: All things finance, for DeFi. Payments platform and multichain wallet",
					description:
						"Ned Finance is an all in one platform for DeFi with the most advanced multi-chain wallet to take DeFi one step further, creating unique experiences while increasing the use cases of crypto.",
					images: [
						{
							url: "https://ned.finance/img/og.jpg",
							alt: "Ned Finance: All things finance, for DeFi. Payments platform and multichain wallet",
							type: "image/jpeg",
						},
					],
					siteName: "Ned Finance",
				}}
				twitter={{
					handle: "@NedFinance",
					site: "@NedFinance",
					cardType: "summary_large_image",
				}}
			/>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
