import {MdBorderColor} from "react-icons/md";
import {BsSunglasses} from "react-icons/bs";
import Link from "next/link";


export default function Home() {

    const cardItems = [
        {
            icon: MdBorderColor,
            text: "Orders",
            to: "/orders",
        },
        {
            icon: BsSunglasses,
            text: "Products",
            to: "/products",
        },
        {
            icon: MdBorderColor,
            text: "Customer",
            to: "/customers",
        },
    ]
    return (<>
            <section>
                <div className={"title flex items-center space-x-2 mb-4 "}>
                    <MdBorderColor className={"text-xl "}/>
                    <p className={"text-lg font-bold"}>New Order</p>
                </div>


                <div
                    className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6  mx-auto bg-slate-800 overflow-hidden  rounded-lg px-6 py-4 "
                >


                    {cardItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                href={item.to}
                                key={index}
                                className="card w-full py-6 px-10 hover:-translate-y-2 transition duration-300 rounded-xl bg-slate-600 flex flex-col justify-center items-center shadow-lg"
                            >
                                <div className="card-body bg-white text-7xl p-4 rounded-3xl text-black mb-4">
                                    <Icon/>
                                </div>

                                <p className="text-lg font-bold line-clamp-2">
                                    {item.text}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
