import Link from "next/link";
import Container from "./container";

const Footer = () => {
	const navigation = [
		// { label: "Doxing", href: "/doxing", target: "_self" },
		{ label: "NFT Collection", href: "/ned-nft-collection", target: "_self" },
		{
			label: "Roadmap",
			href: "https://trello.com/b/AK2e79wa/ned-roadmap",
			target: "_blank",
		},
		{ label: "Docs", href: "https://docs.ned.finance", target: "_blank" },
		{ label: "Blog", href: "https://blog.ned.finance", target: "_blank" },
	];
	const legal = [
		{ label: "Terms of use", href: "/terms", target: "_self" },
		{ label: "Privacy Policy", href: "/privacy-policy", target: "_self" },
	];
	return (
		<div className="relative">
			<Container>
				<div className="grid mx-0 lg:mx-8 xl:mx-8 grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-true-gray-700 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<div>
							{" "}
							<Link href="/">
								<span className="flex items-center space-x-2 text-2xl font-medium text-ned-green-500 dark:text-gray-100">
									<span>
										<img
											src="/img/logo.svg"
											alt="N"
											width="48"
											height="48"
											className="w-16"
										/>
									</span>
								</span>
							</Link>
						</div>

						<div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
							Ned Finance is a DeFi Wallet and payments platform built to help
							new users to use web3 and blockchain world in an easy and secure
							way.
						</div>
					</div>

					<div>
						<div className="flex flex-wrap w-full -ml-3 lg:ml-0">
							{navigation.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									className="w-full"
									target={item.target}>
									<span className="flex px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-ned-green-500 focus:text-ned-green-500 focus:bg-ned-green-100 focus:outline-none dark:focus:bg-true-gray-700">
										{item.label}
									</span>
								</Link>
							))}
						</div>
					</div>
					<div>
						<div className="flex flex-wrap w-full -ml-3 lg:ml-0">
							{legal.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									className="w-full"
									target={item.target}>
									<span className="flex px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-ned-green-500 focus:text-ned-green-500 focus:bg-ned-green-100 focus:outline-none dark:focus:bg-true-gray-700">
										{item.label}
									</span>
								</Link>
							))}
						</div>
					</div>
					<div className="text-gray-500">
						<div>Follow us</div>
						<div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
							<a
								href="https://twitter.com/NedFinance"
								target="_blank"
								rel="noopener">
								<span className="sr-only">Twitter</span>
								<Twitter />
							</a>
							<a
								href="https://discord.gg/Z376CvhUqY"
								target="_blank"
								rel="noopener">
								<span className="sr-only">Discord</span>
								<Discord />
							</a>
						</div>
					</div>
				</div>

				<div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
					Copyright © {new Date().getFullYear()}. Ned Finance
				</div>
			</Container>
		</div>
	);
};

const Twitter = ({ size = 24 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor">
		<path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
	</svg>
);

const Discord = ({ size = 24 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 127.14 96.36"
		fill="currentColor">
		<g
			id="图层_2"
			data-name="图层 2">
			<g
				id="Discord_Logos"
				data-name="Discord Logos">
				<g
					id="Discord_Logo_-_Large_-_White"
					data-name="Discord Logo - Large - White">
					<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
				</g>
			</g>
		</g>
	</svg>
);

export default Footer;
