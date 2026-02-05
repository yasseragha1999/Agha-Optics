import {BsEyeglasses} from "react-icons/bs";


const Frame = () => {

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
                        <div className={"col-span-12 pl-4  rounded-md flex items-center gap-2 text-lg bg-gray-400 py-2 mx-6 "}>
                            <input type="checkbox" defaultChecked/>
                            <label> Browser default </label>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Frame;