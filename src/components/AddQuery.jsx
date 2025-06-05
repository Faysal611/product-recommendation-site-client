import React from 'react';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddQuery = () => {
    const { user, loading } = useAllContext();

    const handleAddQuery = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData.entries());
        formObj.user = {};
        formObj.user.email = user.email;
        formObj.user.username = user.displayName;
        formObj.user.photoURL = user.photoURL;
        formObj.recommendationCount = 0;
        formObj.date = new Date();

        axios.post("http://localhost:3000/addRecipe", formObj)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Query added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    if (loading) {
        <Loading></Loading>
    }

    return (
        <div className='w-[80%] mx-auto my-25'>
            <form onSubmit={handleAddQuery} className="fieldset border-gray-300 border-2 h-max rounded-box w-full p-4">
                <legend className="fieldset-legend text-2xl text-[#302c78]">Fill Out This Form To Add Your Query</legend>

                <label className="label text-[#302c78] text-lg">Product Name</label>
                <input name='productName' type="text" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Product Name" />

                <label className="label text-[#302c78] text-lg">Product Brand</label>
                <input name='productBrand' type="text" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Product Brand" />

                <label className="label text-[#302c78] text-lg">Product Photo URL</label>
                <input name='productPhotoURL' type="url" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Product photo url" />

                <label className="label text-[#302c78] text-lg">Query Title</label>
                <input name='queryTitle' type="text" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Query Title" />

                <label className="label text-[#302c78] text-lg">Boycotting Reason</label>
                <input name='boycottingReason' type="text" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Boycotting reason" />

                <button className="btn bg-[#ffbf33] mt-4 text-[#302c78]">Add Query</button>
            </form>
        </div>
    );
};

export default AddQuery;