// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./components/pages/layout-components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/pages/layout-components/Footer";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

export default function App() {
	const [route, setRoute] = useState("home")
	return (
		<>
			<div className={`flex flex-col justify-between ${route === 'home' ? 'bg-[url(\'/images/cod.jpeg\')]' : ' bg-zinc-900 ' } transition-colors duration-300 ease-in ${route === 'home' || route === 'contact' ? 'min-h-screen h-full' : 'min-h-auto h-auto'} bg-center bg-cover text-zinc-200`}>
				<BrowserRouter>
					<Navbar setRoute={setRoute} route={route}/>
					<Routes>
						<Route path="/" element={<Home setRoute={setRoute}/>}></Route>
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
