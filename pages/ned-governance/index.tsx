import { ChevronRightIcon } from "@heroicons/react/24/outline";
import "react-vertical-timeline-component/style.min.css";
import Benefits from "../../components/benefits";
import Navbar from "../../components/navbar";
import Cta from "../../components/ned-governance/cta";
import Hero from "../../components/ned-governance/hero";
import Holders from "../../public/img/ned-governance/holders.png";
import NedToken from "../../public/img/ned-governance/ned-token.png";

export default () => {
	const featureOne = {
		title: "Fully decentralized, governed by holders",
		desc: () => (
			<div className="text-ned-yellow">
				<p>
					Everyone can be a holder but not everyone can be an{" "}
					<span className="font-bold">owner</span>. Take your part on the future
					of <span className="font-bold">Ned</span> and let's grow together.
				</p>
			</div>
		),
		image: Holders,
		bullets: [],
	};

	const featureTwo = {
		title: "Ned Token",
		desc: () => (
			<div className="text-ned-yellow">
				<p className="mb-8">
					NED token is used to vote and participate in Ned Finance's governance
					system. To find all the information about our token read our Ned Token
					section in Ned Finance's{" "}
					<a
						className="text-ned-yellow"
						href="https://docs.ned.finance">
						docs
					</a>
				</p>
				<div className="flex justify-center lg:justify-start">
					<button
						rel="noopener"
						className="w-auto mt-6 px-8 lg:px-12 xl:px-12 py-2 text-lg font-medium text-center border border-ned-yellow text-black bg-transparent text-ned-yellow rounded-full flex items-center">
						<span className="flex-1">Tokenomics</span>{" "}
						<ChevronRightIcon className="ml-2 w-5 h-5 animate-bounce-right" />
					</button>
				</div>
			</div>
		),
		image: NedToken,
		bullets: [],
	};

	return (
		<>
			<Navbar />
			<div className="container p-8 mx-auto xl:px-0 flex flex-wrap flex-row">
				<Hero />

				<Benefits data={featureOne} />

				<Benefits
					imgPos="right"
					data={featureTwo}
				/>

				<Cta />
			</div>
		</>
	);
};
