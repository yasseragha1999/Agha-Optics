import {MdBorderColor} from "react-icons/md";
// import {BsSunglasses} from "react-icons/bs";
import Image from 'next/image'


export default function Home() {
    return (<>
            <div className={"container  "}>
                <div className={"title flex items-center space-x-2 mb-2 "}>
                    <MdBorderColor className={"text-xl "}/>
                    <p className={"text-lg font-bold"}>New Order</p>
                </div>


                <div
                    className={"flex items-center justify-between w-full bg-stone-700 rounded-lg overflow-hidden p-2 "}>
                    <div
                        className={"card w-50 h-50 rounded-md bg-emerald-600  p-4 flex flex-col justify-center items-center shadow-lg"}>
                        <Image src={"/images/lab.jpg"} alt={"logo"} width={120} height={20}
                               className={"rounded-full"}></Image>


                    </div>

                </div>

            </div>
        </>
    );
}
