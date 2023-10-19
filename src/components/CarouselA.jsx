// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselA() {
	const [data, setData] = useState(null)
	const [games, setGames] = useState(null)
	const [loading, setLoading] = useState(null)

	useEffect(() => {
		async function getData() {

		}
	})
	return (
		<>
			<div>
				<h1 className="text-center">Featured/Recommended Games</h1>
				<Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
					<div>
						<img src="assets/1.jpeg" />
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src="assets/2.jpeg" />
						<p className="legend">Legend 2</p>
					</div>
					<div>
						<img src="assets/3.jpeg" />
						<p className="legend">Legend 3</p>
					</div>
				</Carousel>
			</div>
		</>
	);
}
