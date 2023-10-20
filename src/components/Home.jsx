// eslint-disable-next-line no-unused-vars
import React from "react";
import Nav from "./Navbar";
import CarouselA from "./CarouselA";
import CarouselB from "./CarouselB";
// import CarouselC from "./CarouselC";
import Footer from "./Footer";

export default function Home() {
	return (
		<>
			<div className="flex flex-col justify-between items-center bg-slate-300 text-zinc-200">
				<Nav />
				<CarouselA />
				<CarouselB />
				<Footer />
			</div>
		</>
	);
}
