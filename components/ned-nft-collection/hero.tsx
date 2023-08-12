import Image from "next/image";
import backgroundHeroImg from "../../public/img/ned-nft-collection/background-hero.png";

const Hero = () => {
	return (
		<div className="w-screen max-w-full mt-16 mb-12 h-[60vh] flex items-center mx-0 relative w-screen">
			<div className="z-0 absolute top-[20%] lg:top-0 right-0 left-0 bottom-[20%] lg:bottom-0 opacity-60">
				<Image
					className="z-10 relative w-full h-full"
					style={{ objectFit: "fill", objectPosition: "center" }}
					src={backgroundHeroImg}
					alt="Background Ned NFT title"
					loading="eager"
				/>
			</div>
			<h1 className="z-10 text-5xl font-bold leading-snug tracking-tight font-light text-4xl leading-normal text-white lg:text-5xl xl:text-8xl w-full lg:w-8/12 mx-auto text-center">
				NFTop, a collection for your benefit(s)
			</h1>
		</div>
	);
};

export default Hero;
