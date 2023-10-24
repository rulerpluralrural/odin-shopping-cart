// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Cart({ toggleCart, setToggleCart }) {
	return (
		<div
			className={`h-screen w-full bg-zinc-950 bg-opacity-80 transition-opacity absolute z-30 top-0 right-0 flex justify-end  ${
				!toggleCart
					? "opacity-0 pointer-events-none"
					: "opacity-100 pointer-events-auto"
			}`}
		>
			<div className="flex flex-col justify-between text-zinc-200 bg-slate-900 h-full w-[350px] rounded-sm overflow-hidden">
				<CartHeader setToggleCart={setToggleCart} />
				<CartBody />
				<CartFooter />
			</div>
		</div>
	);
}

function CartHeader({ setToggleCart }) {
	return (
		<div className="relative border-yellow-300 border-b-[1px]">
			<div className=" p-5 text-center py-8 pb-3 font-Poppins">
				<div className="bg-slate-800 rounded-sm text-xl font-bold p-3">
					<h1>Your Cart</h1>
					<p>
						Your cart have <span className="text-green-400 font-bold">0</span>{" "}
						<span>item</span>
					</p>
				</div>
			</div>
			<FontAwesomeIcon
				icon={faCircleXmark}
				className="absolute top-1 right-1 text-red-400 hover:text-red-500 transition-colors cursor-pointer text-xl"
				onClick={() => {
					setToggleCart(false);
				}}
			/>
		</div>
	);
}

function CartBody() {
	return (
		<div className="flex-grow-1 h-full py-3 px-5 overflow-scroll">
			<p>items</p>
			<p>items</p>
			<p>items</p>
			<p>items</p>
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
