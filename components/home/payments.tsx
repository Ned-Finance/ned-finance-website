import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "rooks";
import { Props } from "../../common/props";
import { Container } from "../container";

export const Payments = (props: Props) => {
	const { scrollY, scrollYProgress } = useScroll();
	const windowSize = useWindowSize();
	const start = windowSize.innerHeight * (props.index - 1);
	const end = windowSize.innerHeight * props.index;
	const scale = useTransform(scrollY, [start, end], [1, 3]);
	const opacity = useTransform(scrollY, [start, end], [1, 0]);

	// useMotionValueEvent(scrollY, "change", (latest) => {
	// 	console.log("x changed to", latest, start, end);
	// });

	return (
		<>
			<Container className="flex flex-wrap text-white text-xl">
				<motion.div style={{ opacity }}>Ok</motion.div>
			</Container>
		</>
	);
};
