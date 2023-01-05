import { useState, useEffect } from 'react';

export default function FCRecipe(props) {
    const data = props.data;

    return (
        <div style={{ border: '1px solid black', borderRadius: 6, margin: 20, float: 'left', minWidth: 300 }}>
            <h2>{data.Name}</h2>
            <img src={data.ImageURL} style={{ height: 100, width: 100, borderRadius: 6 }} alt='' />
            <h5>Cooking method</h5>
            <p>{data.CookingMethod}</p>
            <p>Time: {data.Time} minutes</p>
            <h5>Ingrediens</h5>
            <p>{data.IngrediendNames.map((name) => name + ' ')}</p>
        </div>
    );
}
