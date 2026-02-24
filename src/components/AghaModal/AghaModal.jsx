const AghaModal = ({closeModal}) => {
    return (
        <>
            <form
                className={'bg-white fixed inset-1/4 z-10  shadow-lg text-gray-500 rounded-lg px-6 py-4'}>
                <div>
                    <div className='flex items-center gap-2'>
                        <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                        <label htmlFor="destinationInput">Destination</label>
                    </div>
                    <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                </div>
            </form>
        </>
    );
};

export default AghaModal;