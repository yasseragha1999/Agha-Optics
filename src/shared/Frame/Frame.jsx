'use client'
import {BsEyeglasses} from "react-icons/bs";
import {useState} from "react";
import {LuBookUp2} from "react-icons/lu";


const Frame = () => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <section>
                <div className={"frame grid grid-cols-12 "}>
                    <div
                        className={" col-span-12 bg-linear-to-r from-slate-700 to-slate-500  pl-6 py-2 flex items-center space-x-3 text-lg md:text-2xl font-black"}>
                        <BsEyeglasses/>
                        <span>Frame</span>
                    </div>

                    <div
                        className="col-span-12 grid grid-cols-12 gap-6 pb-3 rounded-b-md items-center  bg-white text-black">
                        <div className={"col-span-3 pl-6 pt-2 text-lg font-bold"}>Frame Option</div>
                        <div className={"col-span-9"}></div>

                        {/*Check Frame*/}
                        <div className={`col-span-12 pl-4 rounded-md flex items-center gap-3 text-lg py-2 mx-6  transition 
                                        ${checked ? "bg-linear-to-r from-slate-700 to-slate-500 text-white"
                            : "bg-linear-to-l from-slate-700 to-slate-500 text-black"}`}>
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                                className="w-5 h-5 accent-black rounded-full"
                            />
                            <label>Self Frame</label>
                        </div>


                        {/*Form Details*/}
                        <form className="col-span-12 px-6">

                            <div className={"col-span-12 mb-2"}>
                                <label className="block text-lg  ">Brand and Model # <span
                                    className={"text-red-600"}>*</span></label>
                                <div
                                    className="flex items-center text-lg bg-gray-100  h-12 border pl-2 pr-0.5 rounded border-gray-500/30 w-full">
                                    <input className="px-1 w-full h-full outline-none text-gray-500 bg-transparent"
                                           type="text" placeholder="Tybe to search frames..."/>
                                    <button type="submit"
                                            className="bg-blue-600 px-6 py-3.5 mr-px rounded-sm active:scale-95 transition cursor-pointer">
                                        <LuBookUp2 className={"text-white"}/>
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 gap-6">
                                <div className="col-span-6">
                                    <label className="block text-lg ">
                                        SKU
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Product SKU"
                                        className="w-full h-12 px-2 text-md bg-gray-100 border rounded outline-none border-gray-500/30"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="block text-lg ">
                                       Price <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter Price"
                                        className="w-full h-12 px-2 text-md bg-gray-100 border rounded outline-none border-gray-500/30"
                                    />
                                </div>
                            </div>



                        </form>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Frame;