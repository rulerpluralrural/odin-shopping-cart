// eslint-disable-next-line no-unused-vars
import React from "react";
import Nav from "./Navbar";
import Hero from "./Hero";
// import CarouselB from "./CarouselB";
// import CarouselC from "./CarouselC";
import Footer from "./Footer";

export default function Home() {
	return (
		<>
			<div className="flex flex-col justify-between items-center bg-[url('/images/cod.jpeg')] min-h-screen h-full w-full bg-center bg-cover text-zinc-200">
				<Nav />
				<Hero />
				<Footer />
			</div>
		</>
	);
}
