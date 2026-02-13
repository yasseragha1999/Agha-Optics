import React from 'react';
import {IoCreate} from "react-icons/io5";

const HomePage = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8  shadow-2xl rounded-lg w-full  "}>

            <div className={" bg-linear-to-r  from-slate-700 to-slate-500 rounded-xl flex flex-col gap-4 px-4 py-2"}>
                <IoCreate size={80}/>
                <h6 className={"text-2xl font-bold"}>Create Order</h6>
                <p className={"text-lg "}>Add a new customer order</p>
            </div>
            <div className={" bg-linear-to-r from-slate-700 to-slate-500 rounded-xl flex flex-col gap-4 px-4 py-2"}>
                <IoCreate size={80}/>
                <h6 className={"text-2xl font-bold"}>Manage Frames</h6>
                <p className={"text-lg "}>Add / Edit Frames</p>
                <p className={"text-lg "}>stock</p>
            </div>
            <div className={" bg-linear-to-r from-slate-700 to-slate-500 rounded-xl flex flex-col gap-4 px-4 py-2"}>
                <IoCreate size={80}/>
                <h6 className={"text-2xl font-bold"}>Manage Lenses</h6>
                <p className={"text-lg "}>Add Lens Types</p>
                <p className={"text-lg "}>Pricing</p>
            </div>
            <div className={" bg-linear-to-r from-slate-700 to-slate-500 rounded-xl flex flex-col gap-4 px-4 py-2"}>
                <IoCreate size={80}/>
                <h6 className={"text-2xl font-bold"}>View Orders</h6>
                <p className={"text-lg "}>See Previous Orders</p>
                <p className={"text-lg "}>Print Again</p>
            </div>


        </div>


    );
};

export default HomePage;