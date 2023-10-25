// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Home({ loading, setLoading, setRoute, route }) {
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
		<div className="flex items-center flex-grow">
			<div
				className="md:w-[550px] lg:h-[380px] w-[400px] h-auto flex flex-col ml-20 font-Roboto bg-black bg-opacity-20 rounded-md p-2
				"
			>
				<h1 className="md:text-center text:left font-bold md:text-[2.9rem] text-[2.2rem] text-green-200">
					Game On! Unleash Your Inner Gamer with Our Latest Deals!
				</h1>
				<p className="text-justify md:text-lg text-base">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
					asperiores laudantium ratione ut facilis sed placeat magni dolores
					recusandae mollitia.
				</p>
				<Link
					to={"shop"}
					onClick={() => {
						setLoading(true);
						setRoute("shop");
					}}
					className="mt-2 bg-red-600 hover:bg-red-700 focus:bg-red-700 transition-colors duration-200 ease-in py-2 font-bold text-2xl rounded-lg w-full text-center"
				>
					Shop Now!
				</Link>
			</div>
		</div>
	);
}
