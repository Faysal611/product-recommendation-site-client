import React from 'react';

const RecTableRowForMe = ({index, data}) => {
    return (
        <tr key={index} className="hover:bg-base-300">
            <th className='border border-gray-400 text-center'>{index + 1}</th>
            <td className='border border-gray-400'>{data.recommendationTitle}</td>
            <td className='border border-gray-400'>{data.recommendedProductName}</td>
            <td className='border border-gray-400'>{data.recommendationReason}</td>
        </tr>
    );
};

export default RecTableRowForMe;