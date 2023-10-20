// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function CarouselB() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const key = "cf6ae2de0b734d70b5489940e0af6b6c";
		axios
			.get(`https://api.rawg.io/api/genres?key=${key}`)
			.then((response) => setData(response.data))
			.catch((error) => setError(error));
	}, []);

	if (error)
		return (
			<div className="w-[500px] aspect-square text-center">
				<p>{error.message}</p>
			</div>
		);
	if (!data)
		return (
			<div className="w-[500px] aspect-square text-center">
				<p>Error data not found!</p>
			</div>
		);

	return (
		<>
			<div className="flex flex-col justify-center items-center text-center w-full mt-5">
				<h1 className="text-center font-mono font-bold">Browse by Category</h1>
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={5000}
					centerMode={true}
					className="w-[50%]"
				>
					{data.results.map((item, index) => {
						return (
							<div key={index} className="w-[95%] cursor-pointer shadow-lg shadow-slate-900 hover:animate-pulse">
								<img
									src={item.image_background}
									alt={`${item.name} img`}
									className="w-full aspect-square object-cover"
								/>
								<p className="bg-gradient-to-b from-gray-900 to-gray-600 text-sm font-bold p-1">{item.name}</p>
							</div>
						);
					})}
				</Carousel>
			</div>
		</>
	);
}
