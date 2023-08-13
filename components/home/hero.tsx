import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useWindowSize } from "rooks";
import { Props } from "../../common/props";
import backgroundHeroMobileImg from "../../public/img/home/background-hero-mobile.png";
import backgroundHeroImg from "../../public/img/home/background-hero.png";
import Container from "../container";

export default function Hero(props: Props) {
	const index = 1;
	const { scrollYProgress, scrollY } = useScroll();
	const windowSize = useWindowSize();
	const start = windowSize.innerHeight * (index - 1);
	const end = windowSize.innerHeight * index;
	const scale = useTransform(scrollY, [start, end], [1, 3]);
	const opacityBackground = useTransform(scrollY, [start, end], [1, -1]);
	const opacity = useTransform(scrollY, [start, end], [1, -0.5]);
	useEffect(() => {
		console.log("start", start);
		console.log("end", end);
	}, [start, end]);
	return (
		<>
			<Container className="flex relative h-screen z-0">
				<motion.div className="flex mt-64 lg:mt-0 xl:mt-0 items-center justify-center w-full absolute left-0 right-0">
					<motion.div
						style={{
							scale: scale,
							opacity: opacityBackground,
						}}>
						<div className="hidden lg:block">
							<Image
								src={backgroundHeroImg}
								alt="All things finance"
								loading="eager"
							/>
						</div>
						<div className="lg:hidden">
							<Image
								src={backgroundHeroMobileImg}
								alt="All things finance"
								loading="eager"
							/>
						</div>
					</motion.div>
				</motion.div>
				<div className="flex flex-col justify-center items-center w-full h-full z-1 relative text-center max-w-2xl">
					<div className="mt-auto">
						<motion.div
							style={{
								opacity: opacity,
							}}>
							<h1 className="mb-0 lg:mb-4 xl:mb-4 text-7xl font-bold leading-snug tracking-tight text-gray-800 lg:text-8xl xl:text-9xl text-white">
								One app
							</h1>
							<p className="mb-8 font-light text-4xl leading-normal text-white lg:text-5xl xl:text-8xl">
								Your own bank
							</p>
							<p className="mb-10 font-light text-2xl leading-normal text-ned-green lg:text-3xl xl:text-3xl">
								Finances made easy
							</p>
						</motion.div>
					</div>

					<div className="mt-auto text-white text-xl font-thin mb-16">
						<motion.div
							style={{
								opacity: opacity,
								flex: 1,
								alignItems: "center",
								flexDirection: "column",
							}}>
							<p>Unlock the power of blockchain for your finances</p>
							<button
								onClick={() => {
									window.scrollTo({ top: windowSize.innerHeight - 200 });
								}}
								rel="noopener"
								className="w-auto mt-6 mx-auto px-12 py-2 text-lg font-medium text-center border border-ned-green text-black bg-transparent text-ned-green rounded-full flex items-center">
								<span className="flex-1">Learn more</span>{" "}
								<ChevronDownIcon className="ml-2 mt-1 w-5 h-5 animate-bounce" />
							</button>
						</motion.div>
					</div>
				</div>
			</Container>
		</>
	);
}
