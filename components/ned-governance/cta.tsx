import { motion } from "framer-motion";
import { useRef } from "react";
import { scroll, transformer } from "../../common/utils/animation";
import Container from "../container";

const Cta = () => {
	const ref = useRef(null);
	const { scrollYProgress } = scroll(ref)();
	const propertyTransformer = transformer(scrollYProgress);

	return (
		<Container ref={ref}>
			<motion.div
				className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-ned-yellow px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl relative border border-ned-yellow overflow-hidden border-opacity-20"
				style={{
					opacity: propertyTransformer([0.3, 1], [0, 1]),
					translateY: propertyTransformer([0.3, 1], [-50, 0]),
				}}>
				<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 opacity-30 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-yellow to-60% h-full w-full"></div>
				<div className="flex-grow text-center lg:text-left z-10 text-white">
					<h2 className="text-2xl font-thin lg:text-5xl mb-4">
						<span className="leading-[1.10]">
							Interested in pre-sale?<br></br>
							<span className="text-ned-yellow font-medium">
								Be one of the OGs
							</span>
						</span>
					</h2>
					<p className="mt-2 font-light text-ned-yellow text-opacity-90 lg:text-xl">
						Let's talk and get whitelisted
					</p>
				</div>
				<div className="flex-shrink-0 w-full text-center lg:w-auto z-10">
					<a
						href="mailto:contact@ned.finance"
						target="_blank"
						rel="noopener"
						className="w-auto mx-auto px-12 py-2 text-lg font-medium text-center border border-ned-yellow text-black bg-transparent text-ned-yellow rounded-full flex items-center">
						<span className="flex-1">Contact us</span>
					</a>
				</div>
			</motion.div>
		</Container>
	);
};

export default Cta;
