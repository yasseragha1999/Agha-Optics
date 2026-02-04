"use client";
import {useState} from "react";
import Prescription from "@/shared/Prescription/Prescription";
import Frame from "@/shared/Frame/Frame";
import Lens from "@/shared/Lens/Lens";


const Orders = () => {
    const [checked, setChecked] = useState("prescription");
    const tabs = ["prescription", "frame", "lens"]

    return (
        <section className="container">
            <div className="mb-4">
                <h3 className="text-3xl font-bold mb-2">Create Order</h3>

                {/*drop down in desktop*/}

                {/*      <div className="hidden sm:flex justify-center w-full">*/}
                {/*          <div className="flex gap-1 bg-slate-900 p-1 border border-black rounded-full text-sm">*/}
                {/*              {tabs.map((item) => (*/}
                {/*                  <label*/}
                {/*                      key={item}*/}
                {/*                      className={`cursor-pointer rounded-full py-2 px-9 transition-colors duration-200*/}
                {/*${checked === item*/}
                {/*                          ? "bg-linear-to-r from-slate-700 to-slate-500 text-white"*/}
                {/*                          : "text-gray-500"*/}
                {/*                      }`}*/}
                {/*                  >*/}
                {/*                      <input*/}
                {/*                          type="radio"*/}
                {/*                          name="options"*/}
                {/*                          value={item}*/}
                {/*                          checked={checked === item}*/}
                {/*                          onChange={() => setChecked(item)}*/}
                {/*                          className="hidden"*/}
                {/*                      />*/}
                {/*                      {item.toUpperCase()}*/}
                {/*                  </label>*/}
                {/*              ))}*/}
                {/*          </div>*/}
                {/*      </div>*/}

                {/*drop down in mobile*/}
                {/*<div className="sm:hidden w-full">*/}
                {/*    <select*/}
                {/*        value={checked}*/}
                {/*        onChange={(e) => setChecked(e.target.value)}*/}
                {/*        className="w-full bg-slate-900 text-white p-3 rounded-xl border border-black"*/}
                {/*    >*/}
                {/*        {tabs.map((item) => (*/}
                {/*            <option key={item} value={item} className={"w-fit"}>*/}
                {/*                {item.toUpperCase()}*/}
                {/*            </option>*/}
                {/*        ))}*/}
                {/*    </select>*/}
                {/*</div>*/}


                <Prescription/>
                <Frame/>
            </div>
            {/* Content */
            }
            {/*<div>*/}
            {/*    {checked === "prescription" && <Prescription/>}*/}
            {/*    {checked === "frame" && <Frame/>}*/}
            {/*    {checked === "lens" && <Lens/>}*/}
            {/*</div>*/}
        </section>
    )
        ;
};

export default Orders;
