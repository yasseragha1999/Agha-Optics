import {BsEyeglasses} from "react-icons/bs";
import {FaExchangeAlt, FaEye} from "react-icons/fa";

const Prescription = () => {
    return (<>
        <section>
            <div className={"prescription grid grid-cols-12 "}>
                <div
                    className={" col-span-12 bg-linear-to-r from-slate-700 to-slate-500 rounded-t-2xl pl-6 py-2 flex items-center space-x-3 text-2xl"}>
                    <BsEyeglasses/>
                    <span>Prescription</span>
                </div>

                <div
                    className="col-span-12 grid grid-cols-12 gap-6 pb-3 rounded-b-md items-center  bg-white text-black">
                    <div className={"col-span-4"}></div>
                    <div className={"col-span-8 grid grid-cols-4 space-x-2   my-2 pr-4"}>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-lg text-center text-white rounded-md"}>SPH
                        </div>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-lg text-center text-white rounded-md"}>CYL
                        </div>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-lg text-center text-white rounded-md"}>AXIS
                        </div>
                        <div
                            className={"bg-linear-to-r from-slate-700 to-slate-500 text-lg text-center text-white rounded-md"}>ADD
                        </div>
                    </div>
                    <div className={"col-span-4 flex items-center justify-center space-x-6 "}>
                        <FaEye className={"text-blue-500"}/>
                        <p className={"text-blue-500"}>R.E</p>
                        <FaExchangeAlt className={"text-orange-500"}/>
                    </div>
                    <div className={"col-span-8 grid grid-cols-4 gap-4    pr-4"}>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"

                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                    </div>
                    <div className={"col-span-4 flex items-center justify-center space-x-6 "}>
                        <FaEye className={"text-red-500"}/>
                        <p className={"text-red-500"}>L.E</p>
                        <FaExchangeAlt className={"text-orange-500"}/>
                    </div>
                    <div className={"col-span-8 grid grid-cols-4 gap-4    pr-4"}>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"
                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                        <input type="number" placeholder="0.00"

                               className=" rounded-md text-center outline-offset-2 outline   md:text-lg placeholder-gray-500"
                               required/>
                    </div>


                </div>
            </div>
        </section>
    </>);
};

export default Prescription;