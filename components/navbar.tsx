import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
	const navigation = [
		// { label: "Doxing", href: "/doxing", target: "_self" },
		{ label: "Governance", href: "/ned-governance", target: "_self" },
		{ label: "NFT Collection", href: "/ned-nft-collection", target: "_self" },
		{ label: "Roadmap", href: "/roadmap", target: "_self" },
		{ label: "Blog", href: "https://blog.ned.finance", target: "_blank" },
	];

	return (
		<div className="w-full fixed top-0 left-0 right-0 z-50">
			<div className="w-full absolute h-20 top-0 left-0 right-0 backdrop-blur-md bg-black/30 z-99"></div>
			<nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
				{/* Logo  */}
				<Disclosure>
					{({ open }) => (
						<>
							<div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
								<Link href="/">
									<span className="flex items-center space-x-2 text-2xl font-medium text-ned-green dark:text-gray-100">
										<span>
											<img
												src="/img/logo.svg"
												alt="N"
												width="50"
												height="50"
												className="w-24 ml-8"
											/>
										</span>
									</span>
								</Link>

								<Disclosure.Button
									aria-label="Toggle Menu"
									className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-ned-green focus:text-ned-green focus:bg-transparent focus:outline-none">
									<svg
										className="w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										{open && (
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
											/>
										)}
										{!open && (
											<path
												fillRule="evenodd"
												d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
											/>
										)}
									</svg>
								</Disclosure.Button>

								<Disclosure.Panel
									className="flex flex-wrap flex-col w-full lg:hidden h-[calc(100vh-70px)] absolute left-0 right-0 top-[70px] bottom-0 backdrop-blur-md bg-black/30 flex items-center justify-center"
									onClick={(e) => e.stopPropagation()}>
									{({ close }) => (
										<>
											{navigation.map((item, index) => (
												<Link
													onClick={() => close()}
													className="mb-8"
													key={index}
													href={item.href}
													target={item.target}>
													<span className="w-full px-4 py-2 text-ned-green text-5xl font-light rounded-md hover:text-ned-green focus:text-ned-green focus:bg-ned-green-100 focus:outline-none">
														{item.label}
													</span>
												</Link>
											))}
										</>
									)}
								</Disclosure.Panel>
							</div>
						</>
					)}
				</Disclosure>

				{/* menu  */}
				<div className="hidden text-center lg:flex lg:items-center mr-8">
					<ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
						{navigation.map((menu, index) => (
							<li
								className="ml-3 nav__item"
								key={index}>
								<Link
									href={menu.href}
									target={menu.target}>
									<span className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-ned-green focus:text-ned-green focus:bg-ned-green-100 focus:outline-none">
										{menu.label}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* <div className="hidden mr-3 space-x-3 lg:flex nav__item">
          <Link href="/">
            <span className="px-6 py-2 text-black bg-ned-green rounded-md md:ml-5">
              Get Started
            </span>
          </Link>
        </div> */}
			</nav>
		</div>
	);
}
