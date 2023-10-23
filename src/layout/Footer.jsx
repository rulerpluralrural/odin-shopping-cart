// eslint-disable-next-line no-unused-vars
import React from "react";

const buttonStyle =
	"bg-[#00ff00] hover:bg-red-600 transition-colors duration-200 text-slate-950 w-16 rounded-md font-bold text-xs py-1 font-Poppins";
	
export default function Footer() {
	return (
		<div className="flex flex-col items center gap-2 font-bold font-Roboto text-center text-zinc-200 w-full py-2 text-lg">
			<h1>
				Want to recieve game updates and recommendations?{" "}
				<button className={buttonStyle}>SIGN IN</button>
			</h1>
			<h1>
				Do not have an account yet?{" "}
				<button className={buttonStyle}>SIGN UP</button>
			</h1>
		</div>
	);
}
