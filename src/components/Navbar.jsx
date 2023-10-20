// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const navHover = "relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-zinc-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"

export default function Nav() {
	return (
		<>
			<div className="flex justify-around p-5 font-serif font-bold bg-slate-900 text-zinc-100 w-full shadow-sm shadow-black">
				<div className="flex justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-transform text-xl text-zinc-100 px-3 py-1rounded-md">
					<img
						src="./frogmouth-helm.png"
						alt="logo"
						className="w-14 aspect-square rounded-full"
					/>
					<p>Fake Shop</p>
				</div>
				<nav className="flex items-center justify-evenly w-[300px] text-2xl">
					<FontAwesomeIcon icon={faBars} className="hidden" />
					<a href="#" className={navHover}>Home</a>
					<a href="#" className={navHover}>Shop</a>
                    <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer hover:scale-105 hover:text-red-500 transition-all duration-300  ease-in-out"/>
				</nav>
			</div>
		</>
	);
}
