// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

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

export default function CarouselA() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const key = "cf6ae2de0b734d70b5489940e0af6b6c";
		axios
			.get(
				`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&key=${key}`
			)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				setError(error);
			});
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
			<div className="flex flex-col justify-center items-center w-full">
				<h1 className="text-center p-3 text-2xl font-bold font-mono underline text-slate-950">
					Featured/Recommended Games
				</h1>
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={5000}
					centerMode={true}
					showDots={true}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
					className="w-full pb-10"
				>
					{data.results.map((item, index) => {
						return (
							<div
								key={index}
								className="w-[95%] text-center flex flex-col cursor-pointer hover:animate-pulse shadow-lg shadow-black rounded-t-md"
							>
								<img
									src={item.background_image}
									alt={item.name}
									className="w-full aspect-square object-cover"
								/>{" "}
								<p className="bg-gradient-to-b from-gray-900 to-gray-600 text-white py-2 text-lg font-bold font-mono border-y-[1px] border-slate-900">
									{item.name.length >= 30
										? item.name.substring(0, 20) + "..."
										: item.name}
								</p>
							</div>
						);
					})}
				</Carousel>
			</div>
		</>
	);
}
