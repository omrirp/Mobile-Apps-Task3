import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FCIngredient from './FCIngredient';
import '../index.css';
import { IngredientContext } from '../FCIngredientContext';
const apiUrl = 'https://localhost:44347/api/ingredients';
export default function FCIngredientList(props) {
    const [ingsList, setIngsList] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            //console.log(res.data);
            let ings = res.data;
            setIngsList(ings);
            console.log(ings);
        });
    }, []);

    // useEffect(async () => {
    //     let res = await axios.get(apiUrl);
    //     setIngsList(res.data);
    //     console.log(res.data);
    // }, []);

    return (
        <div className='place'>
            {ingsList.map((ing) => {
                
                return <FCIngredient data={ing} key={ing.Id} />;
            })}
        </div>
    );
}
