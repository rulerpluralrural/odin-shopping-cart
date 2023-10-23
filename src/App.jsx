// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
	const [route, setRoute] = useState("home");
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!window) return;
		setRoute(
			window.location.pathname === "/"
				? "home"
				: window.location.pathname.slice(1)
		);
	}, [window]);

	return (
		<>
			<div
				className={`flex flex-col justify-between ${
					route === "home" ? "bg-[url('/images/cod.jpeg')]" : " bg-zinc-900 "
				} transition-colors duration-300 ease-in h-screen bg-center bg-cover text-zinc-200`}
			>
				<BrowserRouter>
					<Navbar setRoute={setRoute} route={route} />
					<Routes>
						<Route path="/" element={<Home setRoute={setRoute} />}></Route>
						<Route
							path="/shop"
							element={<Shop error={error} setError={setError} />}
						></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="*" element={<ErrorPage />}></Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}
