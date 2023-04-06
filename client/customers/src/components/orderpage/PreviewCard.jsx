import React, { useContext } from 'react';



function PreviewCard({ details }) {
    const { name } = details
    return (
        <h3 className="text-center bg-white w-64 " >{name}</h3>
    );
}

export default PreviewCard;