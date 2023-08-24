import { KeyIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Container from "./container";

export default function Features() {
	return (
		<Container>
			<div className=" flex justify-center">
				<div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl">
					<div className="lg:col-span-2 xl:col-auto">
						<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-true-gray-800">
							<div className="w-20 mb-4 text-white">
								<KeyIcon></KeyIcon>
							</div>
							<div>
								<p className="text-3xl leading-normal text-white">
									Your keys, your money
								</p>
								<p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-true-gray-500">
									Nobody controls your funds, you have no limits, no centralized
									entities, you and your money are safe.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 xl:col-auto">
						<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-true-gray-800">
							<div className="w-20 mb-4 text-white">
								<LockClosedIcon></LockClosedIcon>
							</div>
							<div>
								<p className="text-3xl leading-normal text-white">Privacy</p>
								<p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-true-gray-500">
									We don't track anything, we don't share your data, all your
									information is always safe when you use Ned.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
