"use client";
import {useState} from "react";
import Prescription from "@/shared/Prescription/Prescription";
import Frame from "@/shared/Frame/Frame";


const Orders = () => {


    return (
        <section className="container">
            <div className="mb-4">
                <h3 className="text-3xl font-bold mb-2">Create Order</h3>

                <div className={"w-fit bg-linear-to-l from-white to-slate-500 rounded-2xl"}>
                    <Prescription/>
                    <Frame/>
                </div>
            </div>

        </section>
    )
        ;
};

export default Orders;
