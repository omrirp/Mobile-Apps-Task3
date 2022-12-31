import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useContext } from 'react';
//import { IngredientContext } from '../FCIngredientContext';

export default function FCIngredientForm(props) {
    const style = { margin: 20, width: 300 };
    const localhostNum = '44347'; //could be different for each device
    const apiUrl = `https://localhost:${localhostNum}/api/Ingredients`;
    //const { ingredientList } = useContext(IngredientContext);
    let ingNameInput = null;
    let ingCaloriesInput = null;
    let ingImageUrlInput = null;

    const addName = (e) => {
        ingNameInput = e.target.value;
    };

    const addCalories = (e) => {
        ingCaloriesInput = e.target.value;
    };

    const addImageURL = (e) => {
        ingImageUrlInput = e.target.value;
    };

    const submit = () => {
        const ing = {
            Name: ingNameInput,
            ImageURL: ingImageUrlInput,
            Calories: ingCaloriesInput,
        };

        //Make post request

        axios.post(apiUrl, ing).then((res) => {
            console.log(res.data);
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
                <input
                    style={style}
                    onChange={addName}
                    type='text'
                    name='ingredientName'
                    placeholder='ingredient name :'
                />
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
