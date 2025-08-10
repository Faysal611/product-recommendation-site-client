import React from 'react';
import { Link } from 'react-router';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyQuriesCard = ({ data, setRefresh }) => {
    const { user } = useAllContext();
    console.log(data)
    const handleUpdateQuery = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData.entries());
        formObj.user = {};
        formObj.user.email = user.email;
        formObj.user.userName = user.displayName;
        formObj.user.photoURL = user.photoURL;
        formObj._id = data._id;
        formObj.date = new Date();

        axios.put("https://product-recommendation-system-serve.vercel.app/updateQuery", formObj)
            .then(() => {
                setRefresh(prev => !prev);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated Successfully!",
                    showConfirmButton: false,
                    timer: 1000
                });
            })

        document.getElementById(`my_modal_${data._id}`).close();
    }

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("https://product-recommendation-system-serve.vercel.app/deleteQuery", { data: data })
                .then(() => {
                    setRefresh(prev => !prev);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Deleted Successfully!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                })
            }
          });
    }

    if (!user) {
        return (
            <Loading></Loading>
        )
    }

    return (
        <div className='flex max-sm:flex-col gap-5 max-sm:gap-1 p-5 bg-gray-200 my-10 rounded-2xl border border-gray-300 hover:border-gray-600 duration-200'>
            <div className='flex flex-col justify-center'>
                <img className='w-[550px]' src={data.productPhotoURL} alt="image" />
            </div>
            <div className="divider divider-horizontal max-sm:divider-vertical divider-success"></div>
            <div className='flex flex-col justify-between'>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Title:</span> {data.queryTitle}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Product Name:</span> {data.productName}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Brand:</span> {data.productBrand}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"] text-red-500'>Boycott Reason:</span> {data.boycottingReason}</p>

            </div>
            <div className="divider divider-horizontal max-sm:divider-vertical divider-success"></div>
            <div className='flex flex-col max-sm:gap-2 justify-around items-center'>
                <Link to={`/queryDetails/${data._id}`}><button className="btn w-max text-white bg-[#15c39a]">View Details</button></Link>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn bg-[#ffcd69]" onClick={() => document.getElementById(`my_modal_${data._id}`).showModal()}>Update</button>
                <dialog id={`my_modal_${data._id}`} className="modal">
                    <div className="modal-box">
                        <div className="modal-action">
                            <form onSubmit={handleUpdateQuery} className="fieldset border-gray-300 border-2 h-max rounded-box w-full p-4">
                                <legend className="fieldset-legend text-2xl text-[#302c78]">Fill Out This Form To Update Your Query</legend>

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
                    </div>
                </dialog>
                <button onClick={handleDelete} className="btn w-max text-white bg-red-500">Delete</button>
            </div>
        </div>
    );
};

export default MyQuriesCard;