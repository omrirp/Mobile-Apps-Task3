// import { Component } from 'react';
// import { useContext, useEffect, useState } from 'react';
//import IngredientContextProvider from '../FCIngredientContext';
import axios from 'axios';
import { useContext } from 'react';
import FCIngredientList from '../comps/FCIngredientList';
import { IngredientContext } from '../FCIngredientContext';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const localhostNum = '44347'; //could be different for each device
const apiUrl = `https://localhost:${localhostNum}/api/Recipes`;

export default function FCRecipeForm() {
    const { ingredientList } = useContext(IngredientContext);
    let recNameInput = null;
    let recImageUrlInput = null;
    let recCoockingMethod = null;
    let recCoockingTime = null;

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
            ImageURL: recImageUrlInput,
            CookingMethod: recCoockingMethod,
            Time: recCoockingTime,
        };
        // let ingIds = ingredientList.map((ing) => {
        //     return ing.Id;
        // });

        axios.post(apiUrl, r).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <div>
            <h2>Add recipe</h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 50,
                    alignItems: 'center',
                }}
                className='form'
            >
                <input style={style} onChange={addRecName} type='text' name='Recipe Name' placeholder='Recipe name :' />
                <input
                    style={style}
                    onChange={addCoockingMethod}
                    type='text'
                    name='Coocking Method'
                    placeholder='Coocking Method:'
                />
                <input
                    style={style}
                    onChange={addCoockingTime}
                    type='number'
                    name='Coocking Time'
                    placeholder='Coocking Time:'
                />
                <input style={style} onChange={addImageURL} type='text' name='imageUrl' placeholder='imageUrl:' />
                <div style={{ fontSize: 20 }}>
                    Ingredient List:
                    {ingredientList.map((ing) => {
                        return ' ' + ing.Name + ', ';
                    })}
                </div>
                <br />
                <div>
                    <Button onClick={submit} className='btns' variant='outline-success'>
                        Submit
                    </Button>
                </div>

                <FCIngredientList />
            </div>
        </div>
    );
}
