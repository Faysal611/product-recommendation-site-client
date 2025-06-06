import React from 'react';
import { Link } from 'react-router';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import axios from 'axios';
import Swal from 'sweetalert2';

const QueryDetailsCard = ({ data }) => {
    const {user, loading} = useAllContext();

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData.entries());
        formObj.queryID = data._id;
        formObj.queryTitle = data.queryTitle;
        formObj.productName = data.productName;
        formObj.queryUser = data.user;
        formObj.recommender = {};
        formObj.recommender.email = user.email;
        formObj.recommender.username = user.displayName;
        formData.date = new Date();

        axios.post("http://localhost:3000/postRecommendation", formObj)
        .then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        })

        document.getElementById("my_modal_5").close();
    }

    if(loading) {
        return(
            <Loading></Loading>
        )
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
                <button className="btn w-max bg-[#15c39a]" onClick={() => document.getElementById('my_modal_5').showModal()}>Recommend</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                    <form onSubmit={handleSubmit} className="bg-white p-5 w-[700px] fieldset border-gray-300 border-2 h-max rounded-box">
                        <h1 className='text-3xl font-bold text-[#302c78] mb-4'>Add Your Recommendation</h1>

                        <label className="label text-[#302c78] text-lg">Recommendation Title</label>
                        <input name='recommendationTitle' type="text" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Recommendation Title" />
                        
                        <label className="label text-[#302c78] text-lg">Recommended product Name</label>
                        <input name='recommendedProductName' type="text" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Recommended product Name" />
                        
                        <label className="label text-[#302c78] text-lg">Recommended product Image URL</label>
                        <input name='recommendedProductImageURL' type="url" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Image URL" />
                        
                        <label className="label text-[#302c78] text-lg">Recommendation Reason</label>
                        <input name='recommendationReason' type="text" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Recommendation Reason" />
                 
                        <button className="btn bg-[#ffbf33] mt-4 text-[#302c78]">Add Recommendation</button>
                    </form>

                </dialog>
            </div>
        </div>
    );
};

export default QueryDetailsCard;