import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { useWindowSize } from "rooks";
import { Props } from "../../common/props";
import indexedFundsImg from "../../public/img/home/indexed-funds.png";
import { Container } from "../container";

export const Wallet = (props: Props) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end"],
	});
	const windowSize = useWindowSize();
	const scaleFirstLine = useTransform(scrollYProgress, [0, 0.6], [0.7, 1]);
	const opacityFirstLine = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
	const opacitySecondLine = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
	const opacityFeatures = useCallback(
		(index: number) =>
			useTransform(scrollYProgress, [0.6 + 0.05 * index, 0.8], [0, 1]),
		[]
	);
	const marginTopFeatures = useCallback(
		(index: number) =>
			useTransform(scrollYProgress, [0.6 + 0.05 * index, 0.8], [300, 0]),
		[]
	);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("x changed to", latest);
	});

	return (
		<>
			<Container
				className="flex flex-wrap"
				ref={ref}>
				<div className="w-full h-full flex flex-col">
					<motion.div
						style={{ opacity: opacityFirstLine, scale: scaleFirstLine }}>
						<h2 className="text-6xl text-white text-center">
							One DeFi wallet for all your needs
						</h2>
					</motion.div>
					<motion.div style={{ opacity: opacitySecondLine }}>
						<h2 className="mt-2 text-5xl font-thin text-ned-green text-center">
							Investments, Savings, NFTs, Payments, Swaps and more
						</h2>
					</motion.div>
					<div className="mt-auto h-3/5 mb-16 mx-8 flex">
						<motion.div
							className="border rounded-xl border-ned-green w-1/3 h-full relative px-8 pt-8 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(0),
								translateY: marginTopFeatures(0),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-green to-60% h-full w-full"></div>
							<h3 className="text-4xl text-white font-light text-center mb-8">
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
							className="ml-4 border rounded-xl border-ned-pink w-1/3 h-full relative px-8 pt-8 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(1),
								translateY: marginTopFeatures(1),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-pink to-60% h-full w-full"></div>
							<h3 className="text-4xl text-white font-light text-center mb-8">
								Savings
							</h3>
							<Image
								className="z-10 relative mt-auto h-fit h-auto"
								src={indexedFundsImg}
								alt="Indexed funds"
								loading="eager"
							/>
						</motion.div>
						<motion.div
							className="ml-4 border rounded-xl border-ned-yellow w-1/3 h-full relative px-8 pt-8 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(2),
								translateY: marginTopFeatures(2),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-yellow to-60% h-full w-full"></div>
							<h3 className="text-4xl text-white font-light text-center mb-8">
								Swap
							</h3>
							<Image
								className="z-10 relative mt-auto h-fit h-auto"
								src={indexedFundsImg}
								alt="Indexed funds"
								loading="eager"
							/>
						</motion.div>
					</div>
				</div>
			</Container>
		</>
	);
};
