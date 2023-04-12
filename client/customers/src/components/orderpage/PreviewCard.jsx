import React, { useContext } from 'react';

export default function ({ details }) {
    const { name } = details
    
    return (
        <h3 className="bg-white text-center font-semibold rounded-xl" >{name}</h3>
    );
}