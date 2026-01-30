"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {IoIosNotificationsOutline} from "react-icons/io";
import {CiMenuBurger, CiSettings} from "react-icons/ci";
import {RiCloseLine} from "react-icons/ri";
import {usePathname} from "next/navigation";


const navLinks = [
    {name: "Home", href: "/"},
    {name: "Orders", href: "/orders"},
    {name: "Customers", href: "/customers"},
    {name: "Products", href: "/products"}]


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();
    console.log(pathName);

    return (

        <nav className="w-full py-3 px-4 mx-auto  flex items-center bg-stone-900 justify-between ">


            {/*Logo*/}
            <Link href="/public"><span
                className="font-bold text-xl italic bg-stone-700 py-2 px-4 rounded-2xl">Agha</span></Link>

            {/*Drawer*/}
            <button
                className="text-xl bg-stone-700 py-1 px-1 rounded-xl cursor-pointer md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <RiCloseLine/> : <CiMenuBurger/>}
            </button>


            {/*links */}
            <div className="items-center gap-10  justify-between  hidden md:flex">
                {navLinks.map(
                    (link) => {
                        const isActive = pathName === link.href;

                        return (
                            <Link href={link.href} key={link.name}
                                  className={isActive ? "font-bold" : ""}>
                                {link.name}
                            </Link>
                        )
                    }
                )}
            </div>

            {/*Actions */}
            <div className=" items-center gap-4 justify-between  hidden md:flex">
                <Link href={"/public"}>
                    <button className='text-2xl bg-stone-700 py-1 px-1 rounded-xl cursor-pointer'>
                        <IoIosNotificationsOutline/>
                    </button>
                </Link> <Link href={"/public"}>
                <button className='text-2xl bg-stone-700 py-1 px-1 rounded-xl cursor-pointer'>
                    <CiSettings/>

                </button>
            </Link>
            </div>




        </nav>


    );
};

export default Header;