import React, { useContext } from 'react';

export default function ({ details }) {
    const { name } = details
    
    return (
        <h3 className="text-center font-semibold " >{name}</h3>
    );
}