// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const navHover =
	"relative block after:block after:content-[''] after:absolute after:h-[1.8px] after:bg-zinc-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

export default function Nav() {
	return (
		<>
			<div className="flex justify-between py-5 px-10 font-Roboto font-bold text-zinc-100 w-full">
				<h1
					style={{
						textShadow:
							"0 0 5px #ffa500, 0 0 10px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ff0000, 0 0 10px #ff8d00, 0 0 80px #ff0000",
						color: "#fff6a9",
					}}
					className="text-2xl cursor-pointer animate-blink"
				>
					Fake Shop
				</h1>
				<nav className="flex items-center gap-7 text-[1.3rem] tracking-tighter text-zinc-100">
					<FontAwesomeIcon icon={faBars} className="hidden" />
					<a href="#" className={navHover}>
						HOME
					</a>
					<a href="#" className={navHover}>
						SHOP
					</a>
					<a href="#" className={navHover}>
						CONTACT US
					</a>
					<FontAwesomeIcon icon={faUser} className="rounded-full cursor-pointer border-2 p-1 aspect-square hover:text-green-500 hover:border-green-500 transition-colors"/>
					<FontAwesomeIcon
						icon={faCartShopping}
						className="cursor-pointer hover:scale-105 hover:text-red-500 transition-all duration-300  ease-in-out"
					/>
				</nav>
			</div>
		</>
	);
}
