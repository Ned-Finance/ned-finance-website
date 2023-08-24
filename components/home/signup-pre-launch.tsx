import { ChevronRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";

const SignUpPreLaunch = () => {
	const [processing, setProcessing] = useState(false);
	const [subscribedSuccessfully, setSubscribedSuccessfully] = useState(false);

	const validateEmail = (value) => {
		let error;
		if (!value) {
			error = "Enter an email address";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	};

	const onRegisterUser = async (userEmail: string) => {
		setProcessing(true);
		axios
			.post("https://api.website.ned.finance/signup-pre-launch", {
				email: userEmail,
			})
			.then((response) => {
				console.log(response.data);
				if (response.data.success) {
					toast("Amazing Nedster, you are in!", {
						icon: "👏",
						style: {
							borderRadius: "10px",
							background: "#333",
							color: "#fff",
						},
					});
				} else {
					toast("You are already subscribed, we love you too", {
						icon: "🫶",
						style: {
							borderRadius: "10px",
							background: "#333",
							color: "#fff",
						},
					});
				}

				setSubscribedSuccessfully(true);
			})
			.catch((error) => {
				console.log(error);
				toast(
					"Something went wrong, if this continues please drop us a line to press@ned.finance",
					{
						icon: "🤦🏻‍♂️",
						style: {
							borderRadius: "10px",
							background: "#333",
							color: "#fff",
						},
					}
				);
			})
			.finally(() => {
				setProcessing(false);
			});
	};

	return (
		<>
			{!subscribedSuccessfully ? (
				<Formik
					initialValues={{
						email: "",
					}}
					onSubmit={(values, actions) => {
						onRegisterUser(values.email);
					}}>
					<Form className="flex items-center">
						<Field
							readonly={processing}
							name="email"
							validate={validateEmail}>
							{({ field, form: { touched, errors }, meta }) => (
								<span>
									<input
										{...field}
										placeholder="Notify me"
										className="rounded-l-lg bg-black border border-r-0 border-ned-green my-2 w-full h-10 p-2 outline-none text-white"></input>
									<span className="text-ned-yellow h-6 block text-left text-sm">
										{meta.touched && meta.error ? meta.error : ""}
									</span>
								</span>
							)}
						</Field>
						<span>
							<button
								disabled={processing}
								type="submit"
								rel="noopener"
								className="w-auto h-10 px-4 py-2 text-lg my-2 font-medium text-center border border-ned-green bg-transparent text-ned-green transition-colors hover:text-black hover:bg-ned-green rounded-r-lg flex items-center">
								<span className="flex-1">
									{processing ? (
										<svg
											aria-hidden="true"
											className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-ned-green"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>
									) : (
										<ChevronRightIcon
											width={20}
											height={20}
										/>
									)}
								</span>
							</button>
							<span className="h-6 block"></span>
						</span>
					</Form>
				</Formik>
			) : (
				<div className="text-ned-green">
					You are subscribed, news coming soon! 🚀
				</div>
			)}
		</>
	);
};
export default SignUpPreLaunch;
