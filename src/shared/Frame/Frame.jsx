'use client'
import { useState } from "react";
import { LuBookUp2 } from "react-icons/lu";
import {RiGlasses2Fill} from "react-icons/ri";

const Frame = () => {
    const [checked, setChecked] = useState(false);      // Self Frame
    const [checkedSun, setCheckedSun] = useState(false); // Sunglasses
    const [type, setType] = useState("full");

    return (
        <section>
            <div className="frame grid grid-cols-12">

                {/* Header */}
                <div className="col-span-12 bg-linear-to-r from-slate-700 to-slate-500 pl-6 py-2 flex items-center space-x-3 text-lg md:text-2xl font-black">
                    <RiGlasses2Fill />
                    <span>Frame</span>
                </div>

                <div className="col-span-12 grid grid-cols-12 gap-6 p-3 rounded-b-md items-center bg-white text-black">

                    {/* Frame Checkbox */}
                    <div className="col-span-12 pl-4 rounded-md flex items-center gap-3 text-lg py-2 mx-6 transition
                        bg-linear-to-l from-slate-700 to-slate-500 text-black"
                    >
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            className="w-5 h-5 accent-black rounded-full"
                        />
                        <label>Self Frame</label>
                    </div>

                    {/* Frame Form */}
                    {!checked && (
                        <form className="col-span-12 grid grid-cols-12 px-6 mt-2">

                            <div className="col-span-12 mb-2">
                                <label className="block text-lg">Brand and Model # <span className="text-red-600">*</span></label>
                                <div className="flex items-center text-sm md:text-lg bg-gray-100 h-12 border pl-2 pr-0.5 rounded border-gray-500/30 w-full">
                                    <input
                                        type="text"
                                        placeholder="Type to search frames..."
                                        className="px-1 w-full h-full outline-none text-gray-500 bg-transparent"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 px-6 py-3.5 mr-px rounded-sm active:scale-95 transition cursor-pointer"
                                    >
                                        <LuBookUp2 className="text-white" />
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 gap-6 mb-4">
                                {/* Price */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="block text-lg">Price <span className="text-red-600">*</span></label>
                                    <input
                                        type="tel"
                                        placeholder="Enter Price"
                                        className="w-full h-12 px-4 text-md text-gray-500 bg-gray-100 border rounded outline-none border-gray-500/30"
                                    />
                                </div>

                                {/* Type */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="block text-lg">Type <span className="text-red-600">*</span></label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { id: "full", label: "Full-Rim" },
                                            { id: "supra", label: "Supra" },
                                            { id: "rimless", label: "Rimless" },
                                        ].map((item) => (
                                            <label
                                                key={item.id}
                                                className={`cursor-pointer flex items-center justify-center py-3 rounded-xl border transition
                                                ${type === item.id
                                                    ? "bg-indigo-600 text-white border-indigo-600"
                                                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`frame-type-${item.id}`}
                                                    value={item.id}
                                                    checked={type === item.id}
                                                    onChange={() => setType(item.id)}
                                                    className="hidden"
                                                />
                                                <span className="text-md font-medium">{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}

                    {/* Sunglasses Checkbox with expandable Price input */}
                    <div className={`col-span-12 p-4 rounded-md flex flex-col gap-2 text-lg py-2 mx-6 transition
    ${checkedSun ? "bg-linear-to-r from-slate-700 to-slate-500 text-white" : "bg-linear-to-l from-slate-700 to-slate-500 text-black"}`}>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={checkedSun}
                                onChange={(e) => setCheckedSun(e.target.checked)}
                                className="w-5 h-5 accent-black rounded-full"
                            />
                            <label className="cursor-pointer">Self Sunglasses</label>
                        </div>

                        {/* Price input shows only if checked */}
                        {checkedSun && (
                            <div className="mt-2">
                                <input
                                    type="number"
                                    placeholder="Enter Price"
                                    className="w-full h-12 px-4 text-md text-gray-500 bg-gray-100 border rounded outline-none border-gray-500/30"
                                />
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Frame;
