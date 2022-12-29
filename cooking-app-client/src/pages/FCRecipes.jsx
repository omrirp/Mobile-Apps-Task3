import { Component } from "react";
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
export default function FCRecipes() {
    const apiUrl = "https://localhost:44347/api/ingredients";
    const ingList = [];
    let recNameInput = null;
    let recCaloriesInput = null;
    let recImageUrlInput = null;
    let recCoockingMethod = null;
    let recCoockingTime = null;
    const style = { margin: 20, width: 300 };

    useEffect(() => {
        axios.get(apiUrl).then((res) => ingList = res.data);
    }, []);

    const addRecName = (e) => {
        recNameInput = e.target.value;

    };
    const addCoockingMethod = (e) => {
        recCoockingMethod = e.target.value;

    };
    const addCoockingTime = (e) => {
        recCoockingTime = e.target.value;

    };
    const addImageURL = (e) => {
        recImageUrlInput = e.target.value;

    };
    const submit = () => {
        const rec = {
            Name: recNameInput,
            CoockingMethod: recCoockingMethod,
            CoockingTime: recCoockingTime,
            InageURL: recImageUrlInput,
        };

        console.log(rec)
    };
    

    return <div>recipes
        <h2>Add recipe</h2>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 50, alignItems: 'center' }} className="form">
            <input style={style} onChange={addRecName} type="text" name="Recipe Name" placeholder="Recipe name :" />
            <input style={style} onChange={addCoockingMethod} type="text" name="Coocking Method" placeholder="Coocking Method:" />
            <input style={style} onChange={addCoockingTime} type="text" name="Coocking Time" placeholder="Coocking Time:" />
            <input style={style} onChange={addImageURL} type="text" name="imageUrl" placeholder="imageUrl:" />

            <div>
                <button onClick={submit} className="btns">
                    Submit
                </button>
            </div>
            <div>Ingredient List

            </div>
        </div>

    </div>;



}
