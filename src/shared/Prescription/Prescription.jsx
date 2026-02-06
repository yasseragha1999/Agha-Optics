import {BsEyeglasses} from "react-icons/bs";
import {FaExchangeAlt, FaEye} from "react-icons/fa";

const Prescription = () => {
    return (<>
        <section className={""}>
            <div className={"prescription grid grid-cols-12 "}>
                <div
                    className={" col-span-12 bg-linear-to-r from-slate-700 to-slate-500 rounded-t-2xl pl-6 pt-2 pb-4 flex items-center space-x-3 text-lg md:text-2xl font-black"}>
                    <BsEyeglasses/>
                    <span>Prescription</span>
                </div>

                <div
                    className="col-span-12 grid grid-cols-12 gap-6 pb-6  items-center  bg-white text-black">
                    <div className={"col-span-3"}></div>
                    <div className={"col-span-9 grid grid-cols-5 space-x-2   pt-4 pr-4"}>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-sm p-1 md:text-lg text-center text-white rounded-md"}>SPH
                        </div>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-sm p-1 md:text-lg text-center text-white rounded-md"}>CYL
                        </div>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-sm p-1 md:text-lg text-center text-white rounded-md"}>AXIS
                        </div>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-sm p-1 md:text-lg text-center text-white rounded-md"}>ADD
                        </div>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-sm p-1 md:text-lg text-center text-white rounded-md"}>PD
                        </div>

                    </div>
                    <div className={"col-span-3 flex items-center justify-center  md:space-x-6 space-x-2 "}>
                        <FaEye className={"text-blue-500"}/>
                        <p className={"text-blue-500"}>R.E</p>
                        <FaExchangeAlt className={"text-orange-500"}/>
                    </div>
                    <div className={"col-span-9 grid grid-cols-5 gap-4    pr-4"}>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                    </div>
                    <div className={"col-span-3 flex items-center justify-center md:space-x-6 space-x-2 "}>
                        <FaEye className={"text-red-500"}/>
                        <p className={"text-red-500"}>L.E</p>
                        <FaExchangeAlt className={"text-orange-500"}/>
                    </div>
                    <div className={"col-span-9 grid grid-cols-5 gap-4    pr-4"}>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline  p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   p-1  text-sm  md:text-lg placeholder-gray-500"
                               required/>
                        <button type="reset"
                                className={"bg-red-500   rounded-md text-center outline-offset-2 outline cursor-pointer   md:text-lg"}>Reset
                        </button>
                        <button type="submit"
                                className={"bg-blue-500    rounded-md text-center  outline-offset-2 outline cursor-pointer   md:text-lg"}>Submit
                        </button>

                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default Prescription;