import Image from "next/image";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Hero from "../../components/roadmap/hero";

export default () => {
	const contentStyle = {
		background: "rgb(0,0,0,0)",
		color: "#fff",
		borderRadius: "20px",
		padding: 0,
		boxShadow: "none",
	};
	const contentArrowStyle = { borderRight: "transparent", border: "none" };
	const iconStyle = {
		background: "#374151",
		color: "#fff",
		border: "5px solid #9ca3af",
		boxShadow: "none",
		width: "30px",
		height: "30px",
		left: "5px",
	};

	return (
		<>
			<div className="container p-8 mx-auto xl:px-0 flex flex-wrap flex-row">
				<Hero />
				<VerticalTimeline
					lineColor={"#27272a"}
					layout={"1-column-left"}>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.0.0"
						iconStyle={{
							...iconStyle,
							background: "#00EFD1",
							borderColor: "#00A38D",
						}}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							Apr 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/brands/solana.svg")}
								height="30"
								alt="Solana logo"
							/>
							<span>Wallet Basic features</span>
						</h4>
						<ul className="list-disc text-neutral-400 mt-4 ml-4">
							<li>Create/import wallet</li>
							<li>Load all user tokens</li>
							<li>Get movements history from each token</li>
							<li>Get market information for each token</li>
							<li>Send/Receive tokens on same network</li>
						</ul>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.1.0"
						iconStyle={{
							...iconStyle,
							background: "#00EFD1",
							borderColor: "#00A38D",
						}}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							May 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/brands/solana.svg")}
								height="30"
								alt="Solana logo"
							/>
							<span>Integrations</span>
						</h4>
						<ul className="list-disc text-neutral-400 mt-4 ml-4">
							<li>List user NFTs collections</li>
							<li>Solana Pay integration</li>
							<li>Swap tokens with Jupiter integration</li>
							<li>Funds with Symmetry integration</li>
							<li>Magic Eden integration</li>
						</ul>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.2.0"
						iconStyle={iconStyle}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							June 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/brands/solana.svg")}
								height="30"
								alt="Solana logo"
							/>
							Savings, Payments & Chat
						</h4>
						<ul className="list-disc text-neutral-400 mt-4 ml-4">
							<li>Savings accounts</li>
							<li>Manual deposits</li>
							<li>Spare deposits</li>
							<li>Automatic deposits</li>
							<li>P2P Chat</li>
						</ul>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.3.0"
						iconStyle={iconStyle}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							Jul 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/brands/aptos.svg")}
								height="30"
								alt="Aptos logo"
							/>
							<span>Wallet Basic features</span>
						</h4>
						<ul className="list-disc text-neutral-400 mt-4 ml-4">
							<li>Create/import wallet</li>
							<li>Load all user tokens</li>
							<li>Get movements history from each token</li>
							<li>Get market information for each token</li>
							<li>Send/Receive tokens on same network</li>
						</ul>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.4.0"
						iconStyle={iconStyle}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							Ago 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/rocket.svg")}
								height="30"
								alt="Rocket"
							/>
							<span className="text-ned-green">Launch:</span> Beta release
						</h4>
						<p className="text-neutral-400 mt-4 ml-4">
							First published version of the app
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.5.0"
						iconStyle={iconStyle}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							Ago 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/brands/sui.svg")}
								height="30"
								alt="Sui logo"
							/>
							<span>Basic Integration</span>
						</h4>
						<ul className="list-disc text-neutral-400 mt-4 ml-4">
							<li>Create/import wallet</li>
							<li>Load all user tokens</li>
							<li>Get movements history from each token</li>
							<li>Get market information for each token</li>
							<li>Send/Receive tokens on same network</li>
						</ul>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.6.0"
						iconStyle={iconStyle}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							Sep 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/rocket.svg")}
								height="30"
								alt="Rocket"
							/>
							<span className="text-ned-green">Launch:</span> NFT Collection
							Membership
						</h4>
						<p className="text-neutral-400 mt-4 ml-4">
							Our NFT membership collection will launch
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={contentStyle}
						contentArrowStyle={contentArrowStyle}
						date="v1.7.0"
						iconStyle={iconStyle}>
						<h3 className="vertical-timeline-element-title text-neutral-500">
							Oct 2023
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-3xl">
							<Image
								className="my-2"
								src={require("../../public/img/brands/solana.svg")}
								height="30"
								alt="Solana logo"
							/>
							<span>Cross chain</span>
						</h4>
						<ul className="list-disc text-neutral-400 mt-4 ml-4">
							<li>Cross transfer with Aptos</li>
							<li>Cross transfer with Solana</li>
						</ul>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
		</>
	);
};
