import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const style = { margin: 20, width: 300 };
const localhostNum = '44347'; //could be different for each device
const apiUrl = `https://localhost:${localhostNum}/api/Ingredients`;

export default function FCIngredientForm(props) {
    let [ingNameInput, setIngNameInput] = useState('');
    let [ingCaloriesInput, setIngCaloriesInput] = useState('');
    let [ingImageUrlInput, setIngImageUrlInput] = useState('');

    const addName = (e) => {
        setIngNameInput(e.target.value);
    };

    const addCalories = (e) => {
        setIngCaloriesInput(e.target.value);
    };

    const addImageURL = (e) => {
        setIngImageUrlInput(e.target.value);
    };

    const submit = () => {
        const ing = {
            Name: ingNameInput,
            ImageURL: ingImageUrlInput,
            Calories: ingCaloriesInput,
        };

        axios.post(apiUrl, ing).then((res) => {
            //console.log(res.data);
        });
    };

    return (
        <div>
            <h2>Add Ingredient</h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 50,
                    alignItems: 'center',
                }}
                className='form'
            >
                <input style={style} onChange={addName} type='text' name='ingredientName' placeholder='ingredient name :' />
                <input style={style} onChange={addCalories} type='number' name='calories' placeholder='Calories:' />
                <input style={style} onChange={addImageURL} type='text' name='imageUrl' placeholder='imageUrl:' />
                <div>
                    <Button onClick={submit} className='btns' variant='outline-success'>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
