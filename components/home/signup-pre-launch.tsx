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
				if (response.data.success == false) {
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
									<ChevronRightIcon
										width={20}
										height={20}
									/>
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
