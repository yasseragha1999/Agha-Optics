"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {IoIosHome, IoIosNotificationsOutline} from "react-icons/io";
import {CiMenuBurger, CiSettings} from "react-icons/ci";
import {RiCloseLine} from "react-icons/ri";
import {usePathname} from "next/navigation";


const navLinks = [
    {name: "Home", icon: <IoIosHome/>, href: "/"},
    {name: "Orders", icon: <IoIosNotificationsOutline/>, href: "/orders"},
    {name: "Customers", icon: <IoIosNotificationsOutline/>, href: "/customers"},
    {name: "Products", icon: <IoIosNotificationsOutline/>, href: "/products"},
]


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathName = usePathname();

    return (
        <nav className="w-full py-3 px-4 mx-auto  flex items-center bg-stone-900 justify-between ">
            <Link href="/"><span
                className="font-bold text-xl italic bg-stone-700 py-2 px-4 rounded-2xl">Agha</span></Link>

            <button className='text-xl bg-stone-700 py-1 px-1 rounded-xl cursor-pointer md:hidden '
                    onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (<Link href={"/"}>
                    <RiCloseLine/>
                </Link>) : (<Link href={"/"}>
                    <CiMenuBurger/>
                </Link>)
                }
            </button>


            <div className=" items-center gap-10  justify-between  hidden md:flex">
                {navLinks.map((link, index) => (
                    <Link href={link.href} key={index} className="hover:text-gray-600 transition-colors ">
                        {link.name}
                    </Link>
                ))}
            </div>


            <div className=" items-center gap-4 justify-between  hidden md:flex">
                <Link href={"/"}>
                    <button className='text-2xl bg-stone-700 py-1 px-1 rounded-xl cursor-pointer'>
                        <IoIosNotificationsOutline/>
                    </button>
                </Link> <Link href={"/"}>
                <button className='text-2xl bg-stone-700 py-1 px-1 rounded-xl cursor-pointer'>
                    <CiSettings/>

                </button>
            </Link>
            </div>

        </nav>
    );
};

export default Header;