// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faTrashCan,
	faPlus,
	faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function Cart({
	toggleCart,
	setToggleCart,
	cartItems,
	setCartItems,
}) {
	return (
		<div
			className={`h-screen w-full bg-zinc-950 bg-opacity-80 transition-opacity absolute z-30 top-0 right-0 flex justify-end  ${
				!toggleCart
					? "opacity-0 pointer-events-none"
					: "opacity-100 pointer-events-auto"
			}`}
		>
			<div className="flex flex-col justify-between text-zinc-200 bg-slate-900 h-full rounded-sm overflow-hidden">
				<CartHeader setToggleCart={setToggleCart} cartItems={cartItems} />
				<CartBody cartItems={cartItems} setCartItems={setCartItems} />
				<CartFooter />
			</div>
		</div>
	);
}

function CartHeader({ setToggleCart, cartItems }) {
	return (
		<div className="relative border-yellow-300 border-b-[1px]">
			<div className=" p-5 text-center py-8 pb-3 font-Poppins">
				<div className="bg-slate-800 rounded-sm text-xl font-bold p-3">
					<h1>Your Cart</h1>
					<p>
						Your cart have{" "}
						<span className="text-green-400 font-bold">{cartItems.length}</span>{" "}
						<span>{cartItems.length === 0 ? "item" : "items"}</span>
					</p>
				</div>
			</div>
			<FontAwesomeIcon
				icon={faCircleXmark}
				className="absolute top-1 left-1 text-red-400 hover:text-red-500 transition-colors cursor-pointer text-xl"
				onClick={() => {
					setToggleCart(false);
				}}
			/>
		</div>
	);
}

function CartBody({ cartItems, setCartItems }) {
	return (
		<div className="flex-grow-1 h-full py-3 px-5 overflow-scroll flex flex-col gap-3 font-Roboto">
			{cartItems.map((item, index) => {
				return (
					<div
						key={index}
						className="flex gap-2 justify-between relative border-[2px] border-slate-800 rounded-md"
					>
						<div>
							<img
								src={item.background_image}
								alt={`${item.name} img`}
								className="w-[300px] h-[150px] object-cover rounded-md"
							/>
						</div>
						<div className="text-left w-full flex flex-col justify-evenly text-lg p-2 pb-0">
							<div>
								<p className="text-yellow-300 font-bold text-xl">{item.name}</p>
								<p>${item.prices}</p>
							</div>

							<div className="flex justify-between items-center gap-2">
								<p className="text-green-400 font-bold">
									Total Price: <span className=" font-medium">$0.00</span>
								</p>
								<div className="flex items-center justify-center gap-2 text-xl">
									<FontAwesomeIcon
										icon={faPlus}
										className="cursor-pointer text-green-500 hover:text-green-600 transition-colors"
									/>
									<p className="font-bold">0</p>
									<FontAwesomeIcon
										icon={faMinus}
										className="cursor-pointer text-red-400 hover:text-red-500"
									/>
								</div>
							</div>
						</div>
						<FontAwesomeIcon
							icon={faTrashCan}
							className="absolute top-2 right-2 text-red-500 hover:text-red-600 cursor-pointer text-lg"
						/>
					</div>
				);
			})}
		</div>
	);
}

function CartFooter() {
	return (
		<div className="p-5 border-t-[1px] border-yellow-400 text-center font-Roboto">
			<p className="font-bold text-lg">
				Total Amount : <span className="text-green-400">$0.00</span>
			</p>
			<button className="bg-blue-600 hover:bg-blue-700 focus:hover-blue-700 font-bold tracking-wider text-lg px-3 py-1 rounded-md w-full mt-2">
				Check Out
			</button>
		</div>
	);
}
