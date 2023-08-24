import { motion } from "framer-motion";
import { useRef } from "react";
import { scroll, transformer } from "../../common/utils/animation";
import Container from "../container";

const Cta = () => {
	const ref = useRef(null);
	const { scrollYProgress } = scroll(ref)();
	const propertyTransformer = transformer(scrollYProgress);

	return (
		<Container
			ref={ref}
			className="flex overflow-y-hidden pb-8 lg:pb-16 xl:pb-16">
			<div className="w-full h-full flex flex-col mx-0 lg:mx-8 xl:mx-8">
				<motion.div
					className="flex flex-col items-start justify-between w-full gap-5 mx-auto text-ned-green px-7 py-7 lg:px-12 lg:py-12 rounded-xl relative border border-ned-green overflow-hidden border-opacity-20"
					style={{
						opacity: propertyTransformer([0.3, 1], [0, 1]),
						translateY: propertyTransformer([0.3, 1], [-50, 0]),
					}}>
					<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 opacity-30 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-green to-60% h-full w-full"></div>
					<div className="flex-grow w-full text-center lg:text-left z-10 text-white">
						<h2 className="text-2xl font-thin lg:text-5xl mb-4">
							<span className="leading-[1.10]">
								Don't unbank yourself, be your own bank<br></br>
								Get <span className="text-ned-green font-bold">Ned</span> and be
								the boss
							</span>
						</h2>
						<p className="mt-2 font-light text-ned-green text-opacity-90 lg:text-xl">
							Available for iOS and Android
						</p>
					</div>
					{/* <div className="w-64 lg:w-72 z-10 flex flex-col">
						<h2 className="text-3xl text-white mb-2">Live on Sep 15th</h2>
						<SignUpPreLaunch />
					</div> */}
				</motion.div>
			</div>
		</Container>
	);
};

export default Cta;
