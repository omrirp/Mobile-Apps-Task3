import { useState, useEffect } from 'react';

export default function FCRecipe(props) {
    const data = props.data;

    return (
        <div style={{ border: '1px solid black', margin: 20, float: 'left', minWidth: 300 }}>
            <h2>{data.Name}</h2>
            <img src={data.ImageURL} style={{ height: 100, width: 100, borderRadius: 6 }} alt='' />
        </div>
    );
}
