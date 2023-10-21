// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/pages/layout-components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/pages/layout-components/Footer";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

export default function App() {
	return (
		<>
			<div className="flex flex-col justify-between bg-[url('/images/cod.jpeg')] min-h-screen h-full w-full bg-center bg-cover text-zinc-200">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/shop" element={<Shop />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="*" element={<ErrorPage />}></Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}
