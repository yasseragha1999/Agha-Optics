import {BsEyeglasses} from "react-icons/bs";

const Prescription = () => {
    return (
        <>
            <section>
                <div className={"prescription grid grid-cols-12 "}>
                    <div
                        className={" col-span-12 bg-linear-to-r from-slate-700 to-slate-500 rounded-t-2xl pl-6 py-2 flex items-center space-x-3 text-2xl"}>
                        <BsEyeglasses/>
                        <span>Prescription</span>
                    </div>

                    <div
                        className="col-span-12 grid grid-cols-12 gap-6   bg-white text-black">
                        <div className={"col-span-4"}>1</div>
                        <div className={"col-span-8"}>1</div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Prescription;