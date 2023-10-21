// eslint-disable-next-line no-unused-vars
import React from "react";

const buttonStyle =
	"bg-[#00ff00] hover:bg-red-600 transition-colors duration-200 text-slate-950 w-20 py-[.2rem] rounded-md font-bold text-sm";
	
export default function Footer() {
	return (
		<div className="flex flex-col items center gap-2 font-bold font-Poppins text-center text-zinc-200 w-full py-3 text-lg">
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
