"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {IoIosNotificationsOutline} from "react-icons/io";
import {CiMenuBurger, CiSettings} from "react-icons/ci";
import {RiCloseLine} from "react-icons/ri";
import {usePathname} from "next/navigation";


const navLinks = [{name: "Home", href: "/"}, {name: "Orders", href: "/orders"}, {
    name: "Customers",
    href: "/customers"
}, {name: "Products", href: "/products"}]


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    return (<>
        <nav className="w-full py-3 px-4 mx-auto  flex items-center bg-slate-900 justify-between ">


            {/*Logo*/}
            <Link href="/"><span
                className="font-bold text-xl italic bg-slate-700 py-2 px-4 rounded-2xl">Agha</span></Link>

            {/*Drawer*/}
            <button
                className="text-xl bg-slate-700 py-1 px-1 rounded-xl cursor-pointer md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <RiCloseLine/> : <CiMenuBurger/>}
            </button>


            {/*links */}
            <div className="items-center gap-10  justify-between  hidden md:flex">
                {navLinks.map((link) => {
                    const isActive = pathName === link.href;

                    return (<Link href={link.href} key={link.name}
                                  className={isActive ? "font-bold" : ""}>
                        {link.name}
                    </Link>)
                })}
            </div>

            {/*Actions */}
            <div className=" items-center gap-4 justify-between  hidden md:flex">
                <Link href={"/"}>
                    <button className='text-2xl bg-slate-700 py-1 px-1 rounded-xl cursor-pointer'>
                        <IoIosNotificationsOutline/>
                    </button>
                </Link> <Link href={"/"}>
                <button className='text-2xl bg-slate-700 py-1 px-1 rounded-xl cursor-pointer'>
                    <CiSettings/>

                </button>
            </Link>
            </div>


        </nav>


        <aside
            className={`
    fixed top-12 right-0 
    w-60 h-screen
    bg-slate-900
    transition-transform duration-300
    md:hidden
    ${!isOpen ? "translate-x-full" : "-translate-x-0"}
  `}
        >
            <div className="p-4 flex flex-col gap-4">
                {navLinks.map((link) => {
                    const isActive = pathName === link.href;

                    return (<Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`p-2 rounded ${isActive ? "bg-slate-700 font-bold" : ""}`}
                    >
                        {link.name}
                    </Link>);
                })}
            </div>
        </aside>
    </>);
};

export default Navbar;