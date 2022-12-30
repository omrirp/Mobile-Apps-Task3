// import { Component } from 'react';
// import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import FCIngredientList from '../comps/FCIngredientList';
import IngredientContextProvider from '../FCIngredientContext';
import {IngredientContext} from '../FCIngredientContext';
export default function FCRecipeForm() {
    //const apiUrl = 'https://localhost:44347/api/ingredients';
    const localhostNum = '44347'; //could be different for each device
    const apiUrl = `https://localhost:${localhostNum}/api/Recipes`;
    let recNameInput = null;
    const {ingredientList}=useContext(IngredientContext);
    let recImageUrlInput = null;
    let recCoockingMethod = null;
    let recCoockingTime = null;

    let ingsMock = ['Milk', 'Eggs'];

    const style = { margin: 20, width: 300 };

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
        const r = {
            Name: recNameInput,
            CoockingMethod: recCoockingMethod,
            CoockingTime: recCoockingTime,
            ImageURL: recImageUrlInput,
            
            
        };
        let ingIds =ingredientList.map((ing)=>{
            return ing.Id;
        })
       
        axios.post(apiUrl,r,ingIds ).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 50, textAlign: 'center' }}>
            <h2>Add recipe</h2><br />
            <div  className="form">
                <input style={style} onChange={addRecName} type="text" name="Recipe Name" placeholder="Recipe name :" />
                <input style={style} onChange={addCoockingMethod} type="text" name="Coocking Method" placeholder="Coocking Method:" />
                <input style={style} onChange={addCoockingTime} type="text" name="Coocking Time" placeholder="Coocking Time:" />
                <input style={style} onChange={addImageURL} type="text" name="imageUrl" placeholder="imageUrl:" />
                <br/><span>ingredients:{ingredientList.map}</span>
                <div>
                    <button onClick={submit} className="btns">
                        Submit
                    </button>
                </div>
                <div>Ingredient List:{ingredientList.map((ing)=>{
                   return " "+ing.Name+ ", "
                })}
                </div>
                <FCIngredientList />
                
            </div>
        </div>
    );
}
