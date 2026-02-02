"use client";
import {useState} from "react";

const Orders = () => {
    const [checked, setChecked] = useState("prescription");

    return (
        <section className="container">
            <div className="flex justify-between mb-3">
                <h3 className="text-3xl font-bold">Create Order</h3>

                <div
                    className="md:flex justify-center w-fit space-x-2 bg-slate-900 p-1 border border-black rounded-2xl md:rounded-full text-sm">

                    {["prescription", "frame", "lens"].map((item) => (
                        <div key={item} className="flex items-center">
                            <input
                                type="radio"
                                name="options"
                                id={item}
                                className="hidden peer"
                                checked={checked === item}
                                onChange={() => setChecked(item)}
                            />

                            <label
                                htmlFor={item}
                                className="cursor-pointer rounded-full py-2 px-9 text-gray-500 transition-colors duration-200
                peer-checked:bg-indigo-600 peer-checked:text-white"
                            >
                                {item.toUpperCase()}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div >
                {checked === "prescription" && <p>HTML Content</p>}
                {checked === "frame" && <p>CSS Content</p>}
                {checked === "lens" && <p>React Content</p>}
            </div>
        </section>
    );
};

export default Orders;
