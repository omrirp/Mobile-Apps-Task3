// import { Component } from 'react';
// import { useContext, useEffect, useState } from 'react';
//import IngredientContextProvider from '../FCIngredientContext';
import axios from 'axios';
import { useContext, useState } from 'react';
import FCIngredientList from '../comps/FCIngredientList';
import { IngredientContext } from '../FCIngredientContext';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const localhostNum = '44347'; //could be different for each device
const apiUrl = `https://localhost:${localhostNum}/api/Recipes`;

export default function FCRecipeForm() {
    const { ingredientList } = useContext(IngredientContext);
    const [recNameInput, setRecNameInput] = useState('');
    const [recImageUrlInput, setRecImageUrlInput] = useState('');
    const [recCoockingMethod, setRecCoockingMethod] = useState('');
    const [recCoockingTime, setRecCoockingTime] = useState('');

    const inputeStyle = { margin: 20, width: 300 };

    const addRecName = (e) => {
        setRecNameInput(e.target.value);
        //console.log(recNameInput);
    };
    const addCoockingMethod = (e) => {
        setRecCoockingMethod(e.target.value);
        //console.log(recCoockingMethod);
    };
    const addCoockingTime = (e) => {
        setRecCoockingTime(e.target.value);
        //console.log(recCoockingTime);
    };
    const addImageURL = (e) => {
        setRecImageUrlInput(e.target.value);
        //console.log(recImageUrlInput);
    };

    //form e.preventDefault()
    const submit = () => {
        let ingIds = ingredientList.map((ing) => {
            return ing.Id;
        });

        const recipe = {
            Name: recNameInput,
            ImageURL: recImageUrlInput,
            CookingMethod: recCoockingMethod,
            Time: recCoockingTime,
            IngredientIds: ingIds,
        };

        axios.post(apiUrl, recipe).then((res) => {
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
                <input style={inputeStyle} onChange={addRecName} type='text' name='Recipe Name' placeholder='Recipe name :' />
                <input style={inputeStyle} onChange={addCoockingMethod} type='text' name='Coocking Method' placeholder='Coocking Method:' />
                <input style={inputeStyle} onChange={addCoockingTime} type='number' name='Coocking Time' placeholder='Coocking Time:' />
                <input style={inputeStyle} onChange={addImageURL} type='text' name='imageUrl' placeholder='imageUrl:' />
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
