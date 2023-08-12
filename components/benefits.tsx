import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useWindowSize } from "rooks";
import { scroll, transformer } from "../common/utils/animation";
import Container from "./container";

export default function Benefits(props) {
	const { data } = props;

	const ref = useRef(null);
	const { scrollYProgress } = scroll(ref)();
	const windowSize = useWindowSize();
	const mobileDiff = windowSize.innerWidth < 1024 ? 0.3 : 0;
	const propertyTransformer = transformer(scrollYProgress);
	const translateX = useTransform(scrollYProgress, (value) => {
		const end = props.imgPos === "right" ? -300 : 300;
		const valueToUpdate = value * end - end;
		// console.log("valueToUpdate", `${Math.round(valueToUpdate)}px`, value);
		return `${Math.round(valueToUpdate)}px`;
	});

	return (
		<>
			<Container
				ref={ref}
				className="flex flex-wrap mb-4 lg:mb-20 lg:gap-10 lg:flex-nowrap mx-0 lg:mx-8 xl:mx-8">
				<motion.div
					className={`flex items-center justify-center w-full lg:w-1/2 ${
						props.imgPos === "right" ? "lg:order-1" : ""
					}`}
					style={{
						opacity: propertyTransformer([0.4, 1], [0, 1]),
						translateX: translateX,
					}}>
					<div>
						<Image
							src={data.image}
							width="521"
							height="482"
							alt="Benefits"
							placeholder="blur"
						/>
					</div>
				</motion.div>

				<motion.div
					className={`flex flex-wrap items-center w-full lg:w-1/2 ${
						props.imgPos === "right" ? "lg:justify-end" : ""
					}`}
					style={{
						opacity: propertyTransformer([0.4, 1], [0, 1]),
						translateX: translateX,
					}}>
					<div>
						<div
							className={`flex flex-col w-full mt-4 text-center ${
								props.imgPos === "right" ? "lg:text-left" : "lg:text-right"
							}`}>
							<h3 className="max-w-2xl mt-3 text-5xl leading-none tracking-tight text-gray-800 lg:leading-tight lg:text-6xl dark:text-white">
								{data.title}
							</h3>

							<div className="max-w-2xl py-4 text-3xl lg:text-4xl xl:text-4xl font-thin">
								{<data.desc />}
							</div>
						</div>

						<div className="w-full mt-5">
							{data.bullets.map((item, index) => (
								<Benefit
									key={index}
									title={item.title}
									icon={item.icon}>
									{item.desc}
								</Benefit>
							))}
						</div>
					</div>
				</motion.div>
			</Container>
		</>
	);
}

function Benefit(props) {
	return (
		<>
			<div className="flex items-start mt-8 space-x-3">
				<div className="flex items-center justify-center flex-shrink-0 mt-1 bg-ned-green-500 rounded-md w-11 h-11 ">
					<div className="w-7 h-7 text-neutral-950">
						<props.icon />
					</div>
				</div>
				<div>
					<h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
						{props.title}
					</h4>
					<p className="mt-1 text-gray-500 dark:text-gray-400">
						{props.children}
					</p>
				</div>
			</div>
		</>
	);
}
