import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const RecTableRow = ({ index, data, setRefresh }) => {

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
                axios.delete(`http://localhost:3000/deleteRecommendation?_id=${data._id}&queryID=${data.queryID}`)
                    .then(() => {
                        setRefresh(prev => !prev);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Deleted Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            }
        });
    }

    return (
        <tr key={index} className="hover:bg-base-300">
            <th className='border border-gray-400 text-center'>{index + 1}</th>
            <td className='border border-gray-400'>{data.recommendationTitle}</td>
            <td className='border border-gray-400'>{data.recommendedProductName}</td>
            <td className='border border-gray-400'>{data.recommendationReason}</td>
            <td className='text-center border-2 border-black'><button onClick={handleDelete} className='btn bg-red-500 text-white'>Delete</button></td>
        </tr>
    );
};

export default RecTableRow;