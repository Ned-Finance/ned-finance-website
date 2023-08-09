import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import backgroundHeroImg from "../../public/img/home/background-hero.png";
import Container from "../container";

export default function Hero() {
	return (
		<>
			<Container className="flex flex-wrap relative">
				<div className="flex items-center justify-center w-full absolute left-0 right-0 top-1/2 -translate-y-1/2 max-h-[90%] z-0">
					<div className="hidden lg:block">
						<Image
							// width={screenSize.width}
							// height={screenSize.height - 200}
							src={backgroundHeroImg}
							alt="All things finance"
							loading="eager"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center w-full h-full z-1 relative text-center max-w-2xl">
					<div className="mt-auto	">
						<h1 className="text-6xl font-bold leading-snug tracking-tight text-gray-800 lg:text-8xl lg:leading-tight xl:text-9xl xl:leading-tight text-white">
							One app
						</h1>
						<p className="mb-8 font-light text-5xl leading-normal text-white lg:text-xl xl:text-8xl">
							Your own bank
						</p>
						<p className="mb-10 font-light text-5xl leading-normal text-ned-green lg:text-xl xl:text-4xl">
							Finances made easy
						</p>
					</div>

					<div className="mt-auto text-white font-thin mb-8 flex flex-col items-center">
						<p>Unlock the power of blockchain for your finances</p>
						<button
							rel="noopener"
							className="w-auto mt-6 px-12 py-2 text-lg font-medium text-center border border-ned-green text-black bg-transparent text-ned-green rounded-full flex items-center">
							<span className="flex-1">Learn more</span>{" "}
							<ChevronDownIcon className="ml-2 mt-1 w-5 h-5" />
						</button>
					</div>
				</div>
			</Container>
		</>
	);
}
