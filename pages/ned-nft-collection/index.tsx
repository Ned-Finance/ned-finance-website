import "react-vertical-timeline-component/style.min.css";
import Benefits from "../../components/benefits";
import Container from "../../components/container";
import Cta from "../../components/ned-nft-collection/cta";
import Hero from "../../components/ned-nft-collection/hero";
import NedNftCollection from "../../public/img/ned-nft-collection/ned-nft-collection.png";

export default () => {
	const benefitOne = {
		title: "This is not a collection, it's a membership",
		desc: () => (
			<div className="text-ned-green">
				<p>
					Earn while you spend and get discounts on Ned ecosystem, raffles,
					airdrops, whitelists and more.
				</p>
			</div>
		),
		image: NedNftCollection,
		bullets: [],
	};

	return (
		<>
			<Container className="container p-8 mx-auto xl:px-0 flex flex-wrap flex-row">
				<Hero />

				<Benefits data={benefitOne} />
				<Cta />
			</Container>
		</>
	);
};
