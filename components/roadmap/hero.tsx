import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { transformer } from "../../common/utils/animation";
import backgroundHeroImg from "../../public/img/roadmap/background-hero.png";

const Hero = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end start", "start"],
	});
	const propertyTransformer = transformer(scrollYProgress);
	return (
		<div className="w-screen max-w-full mt-16 mb-12 h-[80vh] flex items-center mx-0 relative w-screen">
			<motion.div className="z-0 absolute top-[20%] lg:top-0 right-0 left-0 bottom-[20%] lg:bottom-0 opacity-60">
				<Image
					className="z-10 relative w-full h-full"
					style={{ objectFit: "fill", objectPosition: "center" }}
					src={backgroundHeroImg}
					alt="Background Ned NFT title"
					loading="eager"
				/>
			</motion.div>
			<motion.div
				className="z-10 text-5xl font-bold leading-snug tracking-tight font-light text-4xl leading-normal text-white lg:text-5xl xl:text-8xl w-full lg:w-8/12 mx-auto text-center"
				style={{
					opacity: propertyTransformer([1, 0.8], [1, 0]),
					scale: propertyTransformer([1, 0.8], [1, 3]),
				}}>
				<h1>Roadmap</h1>
			</motion.div>
		</div>
	);
};

export default Hero;
