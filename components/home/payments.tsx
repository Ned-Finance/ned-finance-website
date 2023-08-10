import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { Props } from "../../common/props";
import { scroll, transformer } from "../../common/utils/animation";
import indexedFundsImg from "../../public/img/home/indexed-funds.png";
import { Container } from "../container";

const Payments = (props: Props) => {
	const ref = useRef(null);
	const { scrollYProgress } = scroll(ref)();
	const propertyTransformer = transformer(scrollYProgress);
	const opacityFeatures = useCallback(
		(index: number) =>
			useTransform(scrollYProgress, [0.5 + 0.09 * index, 0.8], [0, 1]),
		[]
	);
	const marginTopFeatures = useCallback(
		(index: number) =>
			useTransform(scrollYProgress, [0.5 + 0.09 * index, 0.8], [300, 0]),
		[]
	);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("x changed to", latest);
	});

	return (
		<>
			<Container
				className="flex overflow-y-hidden pb-16"
				ref={ref}>
				<div className="w-full h-full flex flex-col mx-8">
					<motion.div
						style={{
							opacity: propertyTransformer([0, 0.6], [0, 1]),
							scale: propertyTransformer([0, 0.4], [0.5, 1]),
						}}>
						<h2 className="text-6xl text-white text-center">
							Do you have a business? We gotcha
						</h2>
					</motion.div>
					<motion.div
						style={{ opacity: propertyTransformer([0.4, 0.5], [0, 1]) }}>
						<h2 className="mt-2 text-4xl font-thin text-ned-pink text-center">
							Cashback + loyalty program + no user fees = happy customers
						</h2>
					</motion.div>
					<div className="mt-16 h-3/5 mb-8 flex">
						<motion.div
							className="border rounded-xl border-ned-pink w-1/3 h-full relative px-8 pt-8 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(0),
								translateY: marginTopFeatures(0),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-pink to-60% h-full w-full"></div>
							<h3 className="text-3xl text-ned-pink font-light text-center mb-8">
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
							<h3 className="text-3xl text-ned-pink font-light text-center mb-8">
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
							<h3 className="text-3xl text-ned-yellow font-light text-center mb-8">
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
					<motion.div
						className="mt-2"
						style={{
							opacity: propertyTransformer([0.92, 1], [0, 1]),
							translateX: propertyTransformer([0.92, 1], [-200, 0]),
						}}>
						<button
							rel="noopener"
							className="w-auto mt-6 mx-auto px-12 py-2 text-lg font-medium text-center border border-ned-pink text-black bg-transparent text-ned-pink rounded-full flex items-center">
							<span className="flex-1">Discover all features</span>{" "}
							<ChevronRightIcon className="ml-2 w-5 h-5 animate-bounce-right" />
						</button>
					</motion.div>
				</div>
			</Container>
		</>
	);
};

export default Payments;
