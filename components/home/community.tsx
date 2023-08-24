import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Props } from "../../common/props";
import { scroll, transformer } from "../../common/utils/animation";
import GovernanceImg from "../../public/img/home/governance.png";
import Container from "../container";

const Community = (props: Props) => {
	const ref = useRef(null);
	const { scrollYProgress } = scroll(ref)();
	const propertyTransformer = transformer(scrollYProgress);
	const filter = useTransform(scrollYProgress, (v) => {
		const value = Math.round((1 - v) * 70) - 35;
		return `blur(${value > 0 ? value : 0}px)`;
	});

	// useMotionValueEvent(scrollYProgress, "change", (latest) => {
	// 	console.log("x changed to", (1 - latest) * 100);
	// });

	return (
		<>
			<Container
				className="flex overflow-y-hidden pb-16"
				ref={ref}>
				<div className="w-full h-full flex flex-col">
					<motion.div
						style={{
							opacity: propertyTransformer([0, 0.6], [0, 1]),
							scale: propertyTransformer([0, 0.4], [0.5, 1]),
						}}>
						<h2 className="text-5xl lg:text-6xl xl:text-6xl text-white text-center">
							Built for everyone
						</h2>
					</motion.div>
					<motion.div
						style={{ opacity: propertyTransformer([0.4, 0.5], [0, 1]) }}>
						<h2 className="mt-4 lg:mt-2 xl:mt-2 text-3xl lg:text-4xl xl:text-4xl font-thin text-ned-yellow text-center">
							DeFi Governance
						</h2>
					</motion.div>
					<div className="h-auto flex relative my-8 lg:my-0 xl:my-0">
						<div>
							<motion.div
								className="ml-0 w-full h-full relative px-0 lg:px-8 xl:px-8 flex flex-col items-center justify-between overflow-hidden"
								style={{
									opacity: propertyTransformer([0.4, 0.6], [0, 1]),
									scale: propertyTransformer([0.4, 0.6], [3, 1]),
									filter,
								}}>
								<Image
									className="z-10 relative mt-auto h-fit h-auto"
									src={GovernanceImg}
									alt="DeFi Governance"
									loading="eager"
								/>
							</motion.div>
						</div>
					</div>
					<motion.div
						className="flex"
						style={{
							opacity: propertyTransformer([0.92, 1], [0, 1]),
							translateX: propertyTransformer([0.92, 1], [-200, 0]),
						}}>
						<a
							href="/ned-governance"
							rel="noopener"
							className="w-auto mx-auto px-8 lg:px-12 xl:px-12 py-2 text-lg font-medium text-center border border-ned-yellow text-black bg-transparent text-ned-yellow rounded-full flex items-center transition-colors hover:text-black hover:bg-ned-yellow">
							<span className="flex-1">Learn about our vision</span>{" "}
							<ChevronRightIcon className="ml-2 w-5 h-5 animate-bounce-right" />
						</a>
					</motion.div>
				</div>
			</Container>
		</>
	);
};

export default Community;
