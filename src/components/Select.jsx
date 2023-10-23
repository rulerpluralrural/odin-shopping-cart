// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Select({ setSortType }) {
	return (
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
			</select>
		</div>
	);
}
