'use client'
import {LiaGlassesSolid} from "react-icons/lia";
import {HiOutlineCurrencyDollar} from "react-icons/hi";
import {useState} from "react";

const AghaModal = ({closeModal, onSave}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !price) return;

        onSave({name, price});
        closeModal();
        console.log(name, price);
    };
    return (
        <>
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg rounded-lg px-6 py-6  w-[60%]"
                >

                    <div>
                        <div className="flex items-center gap-2">
                            <LiaGlassesSolid className="w-6 h-6 text-gray-600" />
                            <label htmlFor="name" className="text-gray-600">
                                Frame Name
                            </label>
                        </div>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded border border-gray-200 px-3 py-2 mt-2  w-full outline outline-gray-300 focus:outline-blue-400"
                            required
                        />
                    </div>


                    <div>
                        <div className="flex items-center gap-2">
                            <HiOutlineCurrencyDollar className="w-6 h-6 text-gray-600" />
                            <label htmlFor="price" className="text-gray-600">
                                Price
                            </label>
                        </div>
                        <input
                            id="price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="rounded border border-gray-200 text-black  px-3 py-2 mt-2 w-full outline outline-gray-300 focus:outline-blue-400"
                            required
                        />
                    </div>


                    <div className="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 min-w-fit bg-red-400 rounded hover:bg-red-500 cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 max-w-fit bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default AghaModal;