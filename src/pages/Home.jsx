// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Home({ setRoute }) {
	const [loading, setLoading] = useState(true);
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
			<div className="w-full h-full flex-col flex justify-center items-center">
				<Triangle height={100} width={100} color="red" />
				<p className="font-Poppins font-bold text-xl">Loading...</p>
			</div>
		);

	return (
		<>
			<div
				className="w-[550px] h-[380px] flex flex-col items-start self-start ml-20 font-Roboto bg-black bg-opacity-20 rounded-md p-2
				"
			>
				<h1 className="text-center font-bold text-[2.9rem] text-green-200">
					Game On! Unleash Your Inner Gamer with Our Latest Deals!
				</h1>
				<p className="text-justify text-lg">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
					asperiores laudantium ratione ut facilis sed placeat magni dolores
					recusandae mollitia.
				</p>
				<Link
					to={"shop"}
					onClick={() => {
						setRoute("shop");
					}}
					className="mt-2 bg-red-600 hover:bg-red-700 focus:bg-red-700 transition-colors duration-200 ease-in py-2 font-bold text-2xl rounded-lg w-full text-center"
				>
					Shop Now!
				</Link>
			</div>
		</>
	);
}
