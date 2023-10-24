// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function ShopGrid({ results, setCartItems, cartItems }) {
	return (
		<div className="grid grid-cols-4 gap-5">
			{results.map((item, index) => {
				return (
					<div
						key={index}
						className="w-[350px] h-[400px] text-center rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform border-1px group"
					>
						<CardImage item={item} />
						<div className="bg-slate-800 flex flex-col items-start rounded-b-lg font-Roboto group-hover:shadow-md group-hover:shadow-yellow-500">
							<CardHeader item={item} />
							<CardDetails
								item={item}
								setCartItems={setCartItems}
								cartItems={cartItems}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

function CardImage({ item }) {
	return (
		<img
			src={item.background_image}
			alt={`${item.name} img`}
			className="w-full h-[200px] object-cover group-hover:animate-pulse"
		/>
	);
}

function CardHeader({ item }) {
	return (
		<div className="w-full flex justify-between items-center p-3 border-y-2 border-slate-600">
			<p className="italic">{item.released.replace(/-/g, "/")}</p>
			<div className="flex gap-2 items-center justify-center">
				<FontAwesomeIcon icon={faStar} className="text-yellow-200 text-xl" />
				<p className="font-bold text-yellow-200">{item.rating}</p>
			</div>
		</div>
	);
}

function CardDetails({ item, setCartItems, cartItems }) {
	const [activeButton, setActiveButton] = useState(false)

	useEffect(() => {
		const toggle = setInterval(() => {
			setActiveButton(false)
		}, 1000)

		return () => {
			clearInterval(toggle)
		}
	},[activeButton])
	return (
		<div className="py-5 px-3 text-left relative flex justify-between w-full">
			<div>
				<p className="font-bold text-lg text-yellow-200">
					{item.name.length >= 25 ? item.name.slice(0, 25) + "..." : item.name}
				</p>
				<p className="italic">{item.genres[0].name}</p>
			</div>
			<div>
				<p className="font-bold text-lg text-green-300">{"$" + item.prices}</p>
			</div>
			<button
				className="absolute bottom-[-20px] left-14 text-center text-lg w-[200px] flex items-center justify-center gap-2 bg-blue-500 rounded-md py-1 font-base font-Poppins  group-hover:bg-blue-600 transition-colors"
				onClick={() => {
					if (cartItems.indexOf(item) !== -1) return
					setCartItems([...cartItems, item]);
					setActiveButton(true)
				}}
			>
				Add to Cart{" "}
				<FontAwesomeIcon
					icon={faCartPlus}
					className={`text-green-400 group-hover:text-red-400 transition-colors ${activeButton && 'animate-ping'}`}
				/>
			</button>
		</div>
	);
}
