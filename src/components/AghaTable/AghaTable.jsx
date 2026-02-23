'use client'
import AghaModal from "@/components/AghaModal/AghaModal";
import {useState} from "react";


const AghaTable = () => {
    const [openModal, setOpenModal] = useState(false);
    let textButton = "Add Frames";

    return (
        <>
            <section>
                <div className={"flex justify-between"}>
                    <div></div>
                    <button
                        onClick={() => setOpenModal(true)}
                        className={`px-6 py-2 active:scale-95 transition bg-blue-500 rounded text-white shadow-lg shadow-blue-500/30 text-sm font-bold
                            cursor-pointer  tracking-widest
                            `}>{textButton.toUpperCase()}
                    </button>
                </div>
                {openModal && (
                    <AghaModal></AghaModal>
                )}
            </section>
        </>
    );
};

export default AghaTable;