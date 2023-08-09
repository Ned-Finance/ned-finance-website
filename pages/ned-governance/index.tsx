import "react-vertical-timeline-component/style.min.css";
import Benefits from "../../components/benefits";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Holders from "../../public/img/holders.png";
import NedToken from "../../public/img/ned-token.png";

export default () => {
	const featureOne = {
		title: "Fully decentralized, governed by holders",
		desc: () => (
			<div>
				<p className="mb-8">
					Ned finance is not like a regular wallet governed by the company who
					built it. Our fully decentralized model allows anyone to be part of
					the future of Ned Finance, fully governed by token holders through our
					DAO.
				</p>
				<p className="text-ned-green">
					Ned Finance has been created on top of decentralization and autonomy.
				</p>
			</div>
		),
		image: Holders,
		bullets: [],
	};

	const featureTwo = {
		title: "Ned Token",
		desc: () => (
			<div>
				<p className="mb-8">
					NED token is used to vote and participate in Ned Finance's governance
					system. To find all the information about our token read our Ned Token
					section in Ned Finance's{" "}
					<a
						className="text-ned-green"
						href="https://docs.ned.finance">
						docs
					</a>
				</p>
				<p>
					<a
						className="text-ned-green"
						href="https://docs.ned.finance">
						Read Ned Token Tokenomics
					</a>
				</p>
			</div>
		),
		image: NedToken,
		bullets: [],
	};

	return (
		<>
			<Navbar />
			<div className="container p-8 mx-auto xl:px-0 flex flex-wrap flex-row">
				<div className="w-full mb-24">
					<h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-6xl lg:leading-tight xl:text-8xl xl:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ned-green to-ned-blue font-SFProDisplay w-min">
						Governance
					</h1>
					<p className="text-white">
						<span className="text-ned-green">Ned Finance</span> will move
						forward in a{" "}
						<span className="text-ned-green">decentralized way</span> through{" "}
						<span className="text-ned-green">Ned Finance DAO</span>
					</p>
					.
				</div>

				<Benefits data={featureOne} />

				<Benefits
					imgPos="right"
					data={featureTwo}
				/>

				<Container>
					<div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-gray-900 bg-ned-green px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
						<div className="flex-grow text-center lg:text-left">
							<h2 className="text-2xl font-medium lg:text-3xl">
								Want to learn more about our collection?
							</h2>
							<p className="mt-2 font-medium text-gray-900 text-opacity-90 lg:text-xl">
								Read our NFT memberships section
							</p>
						</div>
						<div className="flex-shrink-0 w-full text-center lg:w-auto">
							<a
								href="#"
								target="_blank"
								rel="noopener"
								className="inline-block py-3 mx-auto text-lg font-medium text-center text-ned-green bg-gray-900 rounded-md px-7 lg:px-10 lg:py-5 ">
								Ned Docs
							</a>
						</div>
					</div>
				</Container>
			</div>
			<Footer />
		</>
	);
};
