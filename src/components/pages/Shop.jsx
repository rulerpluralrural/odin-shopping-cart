import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

const key = "cf6ae2de0b734d70b5489940e0af6b6c";
const URL = `https://api.rawg.io/api/games?key=${key}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;

export default function Shop() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(URL)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, []);

	if (error) return <div>`${error.message}`</div>;
	if (!data)
		return (
			<div className="w-full flex-col flex justify-center items-center">
				<Triangle height={150} width={150} color="red"/>
				<p className="font-Poppins font-bold text-xl">Loading...</p>
			</div>
		);

	return (
		<div className="grid grid-cols-5 gap-5 h-[800px] overflow-scroll self-center px-5">
			{data.results.map((item, index) => {
				return <div key={index} className="w-[200px] h-[200px] mt-5 text-center">
					<img src={item.background_image} alt={`${item.name} img`}  className="w-full h-full object-cover"/>
					<p>{item.name}</p>
				</div>
			})}
		</div>
	);
}
