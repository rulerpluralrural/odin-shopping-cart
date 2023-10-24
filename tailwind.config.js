// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ["Roboto, sans"],
				Poppins: ["Poppins, serif"],
			},
			keyframes: {
				blink: {
					"20%, 24%, 55%": { color: "#111", textShadow: "none" },
					"0%,19%,21%,23%,25%,54%,56%,100%": {
						textShadow:
							"0 0 5px #ffa500, 0 0 10px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ff0000, 0 0 10px #ff8d00, 0 0 80px #ff0000",
						color: "#fff6a9",
					},
				},
				ping: {
					"75%, 100%": { transform: "scale(2)", opacity: "0" },
				},
			},

			animation: {
				blink: "blink 10s ease infinite",
				ping: "ping 1s linear forwards"
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
	],
};
