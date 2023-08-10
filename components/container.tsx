import { ReactNode, forwardRef } from "react";

type Props = {
	className?: string | undefined;
	children?: ReactNode | undefined;
};

export const Container = forwardRef<HTMLInputElement, Props>(
	(props: Props, ref) => {
		return (
			<div
				ref={ref}
				className={`container h-screen items-center justify-center p-8 mx-auto xl:px-0 ${
					props.className ? props.className : ""
				}`}>
				{props.children}
			</div>
		);
	}
);
