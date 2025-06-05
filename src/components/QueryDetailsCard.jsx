import React from 'react';
import { Link } from 'react-router';

const QueryDetailsCard = ({data}) => {
    const handleSubmit = e => {
        e.preventDefault();
        document.getElementById("my_modal_5").close();
    }

    return (
        <div className='flex gap-5 p-5 bg-gray-200 my-10 rounded-2xl border border-gray-300 hover:border-gray-600 duration-200'>
            <div className='flex flex-col justify-center'>
                <img className='w-[550px]' src={data.productPhotoURL} alt="image" />
            </div>
            <div className="divider divider-horizontal divider-success"></div>
            <div className='flex flex-col justify-between'>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Title:</span> {data.queryTitle}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Product Name:</span> {data.productName}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Brand:</span> {data.productBrand}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"] text-red-500'>Boycott Reason:</span> {data.boycottingReason}</p>

            </div>
            <div className="divider divider-horizontal divider-success"></div>
            <div className='flex flex-col justify-around'>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn w-max bg-[#15c39a]" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form onSubmit={handleSubmit} method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default QueryDetailsCard;