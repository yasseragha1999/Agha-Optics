'use client'
import {LiaGlassesSolid} from "react-icons/lia";
import {HiOutlineCurrencyDollar} from "react-icons/hi";
import {useState} from "react";
import FormModal from "@/components/AghaModal/FormModal";

const AghaModal = ({closeModal, onSave}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     if (!name || !price) return;
    //
    //     onSave({name, price});
    //     closeModal();
    //     console.log(name, price);
    // };
    return (
        <>
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <FormModal/>
            </div>

        </>
    );
};

export default AghaModal;