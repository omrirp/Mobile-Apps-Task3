import { useState, useEffect } from 'react';
import axios from 'axios';
import FCIngredient from './FCIngredient';

const localhostNum = '44347'; //could be different for each device
const apiUrl = `https://localhost:${localhostNum}/api/ingredients`;

export default function FCIngredientList(props) {
    const [ingsList, setIngsList] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            let ings = res.data;
            setIngsList(ings);
            //console.log(ings);
        });
    }, []);

    return (
        <div className='place'>
            {ingsList.map((ing) => {
                return <FCIngredient data={ing} key={ing.Id} />;
            })}
        </div>
    );
}
