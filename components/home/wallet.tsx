import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { useWindowSize } from "rooks";
import { Props } from "../../common/props";
import { scroll, transformer } from "../../common/utils/animation";
import indexedFundsImg from "../../public/img/home/indexed-funds.png";
import savingsImg from "../../public/img/home/savings.png";
import swapImg from "../../public/img/home/swap.png";
import Container from "../container";

const Wallet = (props: Props) => {
	const ref = useRef(null);
	const windowSize = useWindowSize();
	const mobileDiff = windowSize.innerWidth < 1024 ? 0.3 : 0;
	const { scrollYProgress } = scroll(ref)();
	const propertyTransformer = transformer(scrollYProgress);
	const opacityFeatures = useCallback(
		(index: number) =>
			useTransform(
				scrollYProgress,
				[0.5 + 0.09 * index - mobileDiff, 0.8 - mobileDiff],
				[0, 1]
			),
		[]
	);
	const marginTopFeatures = useCallback(
		(index: number) =>
			useTransform(
				scrollYProgress,
				[0.5 + 0.09 * index - mobileDiff, 0.8 - mobileDiff],
				[300, 0]
			),
		[]
	);

	// useMotionValueEvent(scrollYProgress, "change", (latest) => {
	// 	console.log("wallet ===> x changed to", latest);
	// });

	return (
		<>
			<Container
				id="wallet"
				className="flex overflow-y-hidden pb-8 lg:pb-16 xl:pb-16"
				ref={ref}>
				<div className="w-full h-full flex flex-col mx-0 lg:mx-8 xl:mx-8">
					<motion.div
						style={{
							opacity: propertyTransformer([0, 0.6 - mobileDiff], [0, 1]),
							scale: propertyTransformer([0, 0.4 - mobileDiff], [0.5, 1]),
						}}>
						<h2 className="text-5xl lg:text-6xl xl:text-6xl text-white text-center">
							One DeFi wallet for all your needs
						</h2>
					</motion.div>
					<motion.div
						style={{
							opacity: propertyTransformer(
								[0.4 - mobileDiff, 0.5 - mobileDiff],
								[0, 1]
							),
						}}>
						<h2 className="mt-4 lg:mt-2 xl:mt-2 text-3xl lg:text-4xl xl:text-4xl font-thin text-ned-green text-center">
							Investments, Savings, NFTs, Payments, Swaps and more
						</h2>
					</motion.div>
					<div className="mt-8 lg:mt-16 xl:mt-16 h-3/5 mb-8 flex flex-col lg:flex-row xl:flex-row">
						<motion.div
							className="border rounded-xl border-ned-green w-full lg:w-1/3 xl:w-1/3 h-full relative px-8 pt-8 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(0),
								translateY: marginTopFeatures(0),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-green to-60% h-full w-full"></div>
							<h3 className="text-3xl text-ned-green font-light text-center mb-8">
								Investments
							</h3>
							<Image
								className="z-10 relative mt-auto h-fit h-auto"
								src={indexedFundsImg}
								alt="Indexed funds"
								loading="eager"
							/>
						</motion.div>
						<motion.div
							className="mt-4 lg:mt-0 xl:mt-0 lg:ml-4 xl:ml-4 border rounded-xl border-ned-pink w-full lg:w-1/3 xl:w-1/3 h-full relative px-8 pt-8 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(1),
								translateY: marginTopFeatures(1),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-pink to-60% h-full w-full"></div>
							<h3 className="text-3xl text-ned-pink font-light text-center mb-8">
								Savings
							</h3>
							<Image
								className="z-10 relative mt-auto h-fit h-auto"
								src={savingsImg}
								alt="Savings"
								loading="eager"
							/>
						</motion.div>
						<motion.div
							className="mt-4 lg:mt-0 xl:mt-0 lg:ml-4 xl:ml-4 border rounded-xl border-ned-yellow w-full lg:w-1/3 xl:w-1/3 h-full relative px-8 pt-8 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(2),
								translateY: marginTopFeatures(2),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-yellow to-60% h-full w-full"></div>
							<h3 className="text-3xl text-ned-yellow font-light text-center mb-8">
								Swap
							</h3>
							<Image
								className="z-10 relative mt-auto h-fit h-auto"
								src={swapImg}
								alt="Swap"
								loading="eager"
							/>
						</motion.div>
					</div>
					<motion.div
						className="mt-0 lg:mt-2 xl:mt-2 flex"
						style={{
							opacity: propertyTransformer([0.92, 1], [0, 1]),
							translateX: propertyTransformer([0.92, 1], [-200, 0]),
						}}>
						<a
							href="https://docs.ned.finance/"
							target="_blank"
							rel="noopener"
							className="w-auto mt-6 mx-auto px-8 lg:px-12 xl:px-12 py-2 text-lg font-medium text-center border border-ned-green text-black bg-transparent text-ned-green rounded-full flex items-center transition-colors hover:text-black hover:bg-ned-green">
							<span className="flex-1">Discover Ned</span>{" "}
							<ChevronRightIcon className="ml-2 w-5 h-5 animate-bounce-right" />
						</a>
					</motion.div>
				</div>
			</Container>
		</>
	);
};

export default Wallet;
