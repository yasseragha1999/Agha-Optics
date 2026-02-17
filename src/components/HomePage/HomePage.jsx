import React from 'react';
import {IoCreate} from "react-icons/io5";
import Link from "next/link";


const HomePage = () => {
    const itemCards = [
        {
            name: "Create Order",
            description: "Add a new customer order",
            icon: IoCreate,
            href: "/customers",
        },
        {
            name: "Manage Frames",
            description: "Add / Edit Frames",
            icon: IoCreate,
            href: "/products/frames"
        },
        {
            name: "Manage Lenses",
            description: "Add Lens Types",
            icon: IoCreate,
            href: "/products/lenses"
        },
        {
            name: "View Orders",
            description: "See Previous Orders",
            icon: IoCreate,
            href: "/orders"
        }
    ];


    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8  shadow-2xl rounded-lg w-full  "}>
            {itemCards.map((item, index) => {

                    const Icon = item.icon;

                    return (
                        <Link href={item.href} key={index}
                              className={" bg-linear-to-r  from-slate-700 to-slate-500 rounded-xl flex flex-col gap-4 px-4 py-2"}>
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