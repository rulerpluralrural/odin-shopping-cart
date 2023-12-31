// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./components/Cart";

export default function App() {
	const [route, setRoute] = useState("home");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [toggleCart, setToggleCart] = useState(false);
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem("cartItems")) || []
	);

	useEffect(() => {
		if (!window) return;
		setRoute(
			window.location.pathname === "/"
				? "home"
				: window.location.pathname.slice(1)
		);
	}, [window]);

	return (
		<div
			className={`flex flex-col h-screen justify-between ${
				route === "home" ? "bg-[url('/images/cod.jpeg')]" : "bg-zinc-900 "
			} transition-colors duration-300 ease-in bg-center bg-cover bg-fixed text-zinc-200 relative`}
		>
			<BrowserRouter>
				<Navbar
					setRoute={setRoute}
					route={route}
					setLoading={setLoading}
					toggleCart={toggleCart}
					setToggleCart={setToggleCart}
					cartItems={cartItems}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								loading={loading}
								setLoading={setLoading}
								setRoute={setRoute}
								route={route}
							/>
						}
					></Route>
					<Route
						path="/shop"
						element={
							<Shop
								loading={loading}
								setLoading={setLoading}
								error={error}
								setError={setError}
								setCartItems={setCartItems}
								cartItems={cartItems}
							/>
						}
					></Route>
					<Route
						path="*"
						element={
							<ErrorPage
								loading={loading}
								setRoute={setRoute}
								setLoading={setLoading}
							/>
						}
					></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
			<Cart
				toggleCart={toggleCart}
				setToggleCart={setToggleCart}
				cartItems={cartItems}
				setCartItems={setCartItems}
			/>
		</div>
	);
}
