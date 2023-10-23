// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

export default function ErrorPage({ loading, setRoute, route, setLoading }) {
	useEffect(() => {
		const load = setInterval(() => {
			setLoading(false);
		}, 800);
		return () => {
			clearInterval(load);
		};
	}, []);

	if (loading)
		return (
			<div className="w-full h-full flex-grow flex-col flex justify-center items-center">
				<Triangle height={100} width={100} color="red" />
				<p className="font-Poppins font-bold text-xl">Loading...</p>
			</div>
		);

	return (
		<div className="flex-grow flex flex-col gap-2 justify-center items-center font-Poppins font-bold text-xl bg-white text-slate-900 ">
			<img
				src="./images/error.jpg"
				alt="error-img"
				className="w-[500px] aspect-square"
			/>
			<Link
				to={"/"}
				onClick={() => {
                    setLoading(true)
					setRoute("home");
				}}
				className="hover:text-slate-800 hover:underline font-Poppins"
			>
				Go back to home page...
			</Link>
		</div>
	);
}
