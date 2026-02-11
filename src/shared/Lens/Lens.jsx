import {GiMicroscopeLens} from "react-icons/gi";
import {LuBookUp2} from "react-icons/lu";
import {useState} from "react";

const Lens = () => {

    const [checkedLens, setCheckedLens] = useState(false); // Lens


    return (
        <section>

            {/*Header*/}
            <div
                className="col-span-12 bg-linear-to-r from-slate-700 to-slate-500 pl-6 py-2 flex items-center space-x-3 text-lg md:text-2xl font-black">
                <GiMicroscopeLens/>
                <span>Lens</span>
            </div>

            <div className="col-span-12 grid grid-cols-12 gap-6 p-3 rounded-b-md items-center bg-white text-black">

                {/* Frame Checkbox */}
                <div className={`col-span-12 pl-4 rounded-md flex items-center gap-3 text-lg py-2 mx-6 transition
                        ${checkedLens ? "bg-blue-700 text-white" : "bg-linear-to-l from-slate-700 to-slate-500 text-black"}`}
                >
                    <input
                        type="checkbox"
                        checked={checkedLens}
                        onChange={(e) => setCheckedLens(e.target.checked)}
                        className="w-5 h-5 accent-black rounded-full"
                    />
                    <label>Self Lens</label>
                </div>

                {/* Frame Form */}
                {!checkedLens && (
                    <form className="col-span-12 grid grid-cols-12 px-6 mt-2">

                        <div className="col-span-12 mb-2">
                            <label className="block text-lg">Product Details <span
                                className="text-red-600">*</span></label>
                            <div
                                className="flex items-center text-sm md:text-lg bg-gray-100 h-12 border pl-2 pr-0.5 rounded border-gray-500/30 w-full">
                                <input
                                    type="text"
                                    placeholder="Type to search Lens..."
                                    className="px-1 w-full h-full outline-none text-gray-500 bg-transparent"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 px-6 py-3.5 mr-px rounded-sm active:scale-95 transition cursor-pointer"
                                >
                                    <LuBookUp2 className="text-white"/>
                                </button>
                            </div>
                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-6 mb-4">
                            {/* Price */}
                            <div className="col-span-12 ">
                                <label className="block text-lg">Price <span className="text-red-600">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Enter Price"
                                    className="w-full h-12 px-4 text-md text-gray-500 bg-gray-100 border rounded outline-none border-gray-500/30"
                                />
                            </div>


                        </div>
                    </form>
                )}


            </div>

        </section>
    );
};

export default Lens;