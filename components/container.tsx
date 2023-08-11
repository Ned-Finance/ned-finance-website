import { ReactNode, forwardRef } from "react";

type Props = {
	className?: string | undefined;
	children?: ReactNode | undefined;
};

const Container = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
	const { className, children } = props;
	return (
		<div
			ref={ref}
			className={`container items-center justify-center p-8 mx-auto xl:px-0 ${
				className ? className : ""
			}`}>
			{children}
		</div>
	);
});

export default Container;
