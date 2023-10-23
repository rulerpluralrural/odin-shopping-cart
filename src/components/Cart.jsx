// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Cart({ toggleCart, setToggleCart }) {
	return (
		<div className={`absolute text-zinc-200 bg-zinc-900 z-30 top-0 right-0 h-screen w-[500px] transition-opacity ${!toggleCart ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <button onClick={() => {
                setToggleCart(false)
            }}>x</button>
			<p>this is a cart</p>
            <p>this is a cart</p>
            <p>this is a cart</p>
            <p>this is a cart</p>
		</div>
	);
}
