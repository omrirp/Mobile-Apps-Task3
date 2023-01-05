import axios from 'axios';
import { useState, useEffect } from 'react';
import FCRecipe from '../comps/FCRecipe';

const localhostNum = '44347'; //could be different for each device
const apiUrl = `https://localhost:${localhostNum}/api/Recipes`;
export default function FCViewRecipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            setRecipes(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: 50,
                alignItems: 'center',
                margin: 'auto',
            }}
        >
            {recipes.map((rec) => {
                return <FCRecipe data={rec} key={rec.Id} />;
            })}
        </div>
    );
}
