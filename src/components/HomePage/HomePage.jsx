import React from 'react';
import Link from "next/link";
import {MdOutlineBorderColor} from "react-icons/md";
import {Gi3dGlasses, GiSpectacleLenses} from "react-icons/gi";
import {FaUsersViewfinder} from "react-icons/fa6";


const HomePage = () => {
    const itemCards = [
        {
            name: "Create Order",
            description: "Add a new customer order",
            icon: MdOutlineBorderColor,
            href: "/orders",
        },
        {
            name: "Manage Frames",
            description: "Add / Edit Frames",
            icon: Gi3dGlasses,
            href: "/products/frames"
        },
        {
            name: "Manage Lenses",
            description: "Add Lens Types",
            icon: GiSpectacleLenses,
            href: "/products/lenses"
        },
        {
            name: "View Orders",
            description: "See Previous Orders",
            icon: FaUsersViewfinder,
            href: "/customers"
        }
    ];


    return (
        <div
            className={"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8  shadow-2xl rounded-lg w-[85%]  mx-auto md:w-full "}>
            {itemCards.map((item, index) => {

                    const Icon = item.icon;

                    return (
                        <Link href={item.href} key={index}
                              className={` bg-linear-to-r  from-slate-700 to-slate-500 rounded-xl flex flex-col items-center gap-4 p-4
                              hover:bg-linear-to-l  hover:from-slate-700 hover:to-slate-500 hover:scale-105
                              `}>
                            <Icon size={80}/>
                            <h6 className={"text-2xl font-bold"}>{item.name}</h6>
                            <p className={"text-lg "}>{item.description}</p>
                        </Link>
                    )
                }
            )}
        </div>


    )
        ;
};

export default HomePage;