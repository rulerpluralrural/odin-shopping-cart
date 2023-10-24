import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useState } from "react";
import { Triangle } from "react-loader-spinner";
import ShopGrid from "../components/ShopGrid";
import SearchBox from "../components/SearchBox";
import Select from "../components/Select";

const key = "cf6ae2de0b734d70b5489940e0af6b6c";
const URL = `https://api.rawg.io/api/games?key=${key}&dates=2020-01-01,2023-10-20`;

export default function Shop({ loading, setLoading, error, setError, setCartItems, cartItems }) {
	const [data, setData] = useState(null);
	const [sortType, setSortType] = useState("default");
	const [searchInput, setSearchInput] = useState("");
	const [filteredResults, setFilteredResults] = useState([]);
	const [prices] = useState([29.99, 19.99, 39.99, 49.09]);

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		if (searchInput !== "") {
			const filteredData = data.results.filter((item) => {
				return Object.values(item)
					.join("")
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(data.results);
		}
	};

	// Handle sorting data's based on selected option and search input
	const sortedData = useMemo(() => {
		let results = searchInput.length >= 1 ? filteredResults : data?.results;

		if (sortType === "a-z") {
			results = results.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
		} else if (sortType === "z-a") {
			results = results.sort((a, b) => {
				return b.name.localeCompare(a.name);
			});
		} else if (sortType === "rating") {
			results = results.sort((a, b) => {
				return b.rating - a.rating;
			});
		} else if (sortType === "popularity") {
			results = results.sort((a, b) => {
				return b.suggestions_count - a.suggestions_count;
			});
		} else if (sortType === "highest") {
			results = results.sort((a, b) => {
				return b.prices - a.prices;
			});
		} else if (sortType === "lowest") {
			results = results.sort((a, b) => {
				return a.prices - b.prices;
			});
		}

		return { ...data, results };
	}, [data, sortType, searchInput]);

	useEffect(() => {
		axios
			.get(URL)
			.then((response) => {
				setData({
					...response.data,
					results: response.data.results.map((item) => {
						return {
							...item,
							prices: prices[Math.floor(Math.random() * prices.length)],
							purchaseCount: 0
						};
					}),
				});
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				setError(error);
			});
	}, []);

	if (error) {
		return <Error error={error} />;
	} else if (loading) {
		return <Loading />;
	} else {
		return (
			<div className="flex flex-col gap-6 self-center mt-28 overflow-scroll scroll-smooth px-8">
				<div className="flex gap-2 items-center justify-center self-center w-full">
					<SearchBox searchItems={searchItems} />
					<Select setSortType={setSortType} />
				</div>
				<ShopGrid results={sortedData.results} setCartItems={setCartItems} cartItems={cartItems}/>
			</div>
		);
	}
}

function Error(error) {
	return (
		<div className="flex justify-center items-center font-Poppins font-bold text-xl bg-white min-h-screen">
			<p>{error.message}</p>
		</div>
	);
}

function Loading() {
	return (
		<div className="w-full min-h-screen h-full flex-col flex justify-center items-center">
			<Triangle height={110} width={110} color="red" />
			<p className="font-Poppins font-bold text-xl">Loading...</p>
		</div>
	);
}
