// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCartShopping,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const navHover =
	"relative block after:block after:content-[''] after:absolute after:h-[1.8px] after:bg-zinc-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer";

export default function Navbar({ setRoute, route }) {
	return (
		<>
			<div
				className={`flex flex-col justify-between items-center ${
					route === "shop" &&
					"fixed bg-zinc-900 shadow-[1px_1px_10px] shadow-yellow-500 z-20"
				} w-full bg-transparentz-20`}
			>
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
					<Nav setRoute={setRoute} />
				</div>
			</div>
		</>
	);
}

function Nav({ setRoute }) {
	return (
		<nav>
			<ul className="flex items-center gap-7 text-[1.3rem] tracking-tighter text-zinc-100">
				<li>
					<FontAwesomeIcon icon={faBars} className="hidden" />
				</li>
				<li className={navHover}>
					<Link
						to={"/"}
						onClick={() => {
							setRoute("home");
						}}
					>
						HOME
					</Link>
				</li>
				<li className={navHover}>
					<Link
						to={"/shop"}
						onClick={() => {
							setRoute("shop");
						}}
					>
						SHOP
					</Link>
				</li>
				<li className={navHover}>
					<Link
						to={"/contact"}
						onClick={() => {
							setRoute("contact");
						}}
					>
						CONTACT
					</Link>
				</li>
				<li>
					<FontAwesomeIcon
						icon={faUser}
						className="rounded-full cursor-pointer border-2 p-1 aspect-square hover:text-green-500 hover:border-green-500 transition-colors"
					/>
				</li>
				<li>
					<FontAwesomeIcon
						icon={faCartShopping}
						className="cursor-pointer hover:scale-105 hover:text-red-500 transition-all duration-300  ease-in-out"
					/>
				</li>
			</ul>
		</nav>
	);
}
