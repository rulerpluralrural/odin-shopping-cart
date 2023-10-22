import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const key = "cf6ae2de0b734d70b5489940e0af6b6c";
const URL = `https://api.rawg.io/api/games?key=${key}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;

export default function Shop() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [sortType, setSortType] = useState("default");
	const prices = [29.99, 19.99, 39.99, 50.99];

	const sortedData = useMemo(() => {
		let results = data?.results;

		if (sortType === "a-z") {
			results = results.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
		} else if (sortType === "z-a") {
			results = results.sort((a, b) => {
				return b.name.localeCompare(a.name);
			});
		}

		return { ...data, results };
	}, [data, sortType]);

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

	if (error)
		return (
			<div className="w-full flex-col flex justify-center items-center font-Poppins font-bold text-xl min-h-screen h-full">
				<p>{error.message}</p>
			</div>
		);
	if (!data)
		return (
			<div className="w-full min-h-screen h-full flex-col flex justify-center items-center">
				<Triangle height={150} width={150} color="red" />
				<p className="font-Poppins font-bold text-xl">Loading...</p>
			</div>
		);

	return (
		<div className="flex flex-col gap-6 self-center mt-28">
			<div className="flex gap-2 items-center justify-center self-center w-full">
				<div className="w-[500px]">
					<form>
						<label
							htmlFor="default-search"
							className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Search
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								className="block w-full px-4 py-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search Games"
								required
							/>
							<button
								type="submit"
								className="text-white absolute right-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Search
							</button>
						</div>
					</form>
				</div>
				<div className="w-[180px]">
					<select
						defaultValue="default"
						onChange={(e) => {
							setSortType(e.target.value);
						}}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-md p-2.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  font-bold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option disabled value="default">
							Sort by :
						</option>
						<option value="a-z">A - Z</option>
						<option value="z-a">Z - A</option>
						<option value="rating">Rating</option>
						<option value="popularity">Popularity</option>
						<option value="highest">Highest(Price)</option>
						<option value="lowest">Lowest(Price)</option>
					</select>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-5">
				{sortedData.results.map((item, index) => {
					return (
						<div
							key={index}
							className="w-[350px] h-[400px] text-center rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform border-1px group"
						>
							<img
								src={item.background_image}
								alt={`${item.name} img`}
								className="w-full h-[200px] object-cover group-hover:animate-pulse"
							/>
							<div className="bg-slate-800 flex flex-col items-start rounded-b-lg font-Roboto group-hover:shadow-md group-hover:shadow-yellow-500">
								<div className="w-full flex justify-between items-center p-3 border-y-2 border-slate-600">
									<p className="italic">{item.released.replace(/-/g, "/")}</p>
									<div className="flex gap-2 items-center justify-center">
										<FontAwesomeIcon
											icon={faStar}
											className="text-yellow-200 text-xl"
										/>
										<p className="font-bold text-yellow-200">{item.rating}</p>
									</div>
								</div>
								<div className="py-5 px-3 text-left relative flex justify-between w-full">
									<div>
										<p className="font-bold text-lg text-yellow-200">
											{item.name.length >= 25
												? item.name.slice(0, 25) + "..."
												: item.name}
										</p>
										<p className="italic">{item.genres[0].name}</p>
									</div>
									<div>
										<p className="font-bold text-lg text-green-300">
											{"$" + prices[Math.floor(Math.random() * prices.length)]}
										</p>
									</div>
									<button className="absolute bottom-[-20px] left-14 text-center text-lg w-[200px] flex items-center justify-center gap-2 bg-blue-500 rounded-md py-1 font-base font-Poppins  group-hover:bg-blue-600 transition-colors">
										Add to Cart{" "}
										<FontAwesomeIcon
											icon={faCartPlus}
											className="text-green-400 group-hover:text-red-400 transition-colors"
										/>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
