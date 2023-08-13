import { ReactNode, forwardRef } from "react";

type Props = {
	className?: string | undefined;
	children?: ReactNode | undefined;
	id?: string | undefined;
};

const Container = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
	const { className, children, id } = props;
	return (
		<div
			id={id}
			ref={ref}
			className={`container items-center justify-center p-8 mx-auto xl:px-0 ${
				className ? className : ""
			}`}>
			{children}
		</div>
	);
});

export default Container;
