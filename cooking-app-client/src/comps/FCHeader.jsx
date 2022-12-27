import { Routes, Route, Link } from 'react-router-dom';
import FCIngredient from '../pages/FCIngredient';
import FCRecipes from '../pages/FCRecipes';
import FCViewRecipe from '../pages/FCVeiwRecipes';

export default function FCHeader() {
    const style = { margin: 40, fontSize: 25 };

    return (
        <div>
            <h1>Cooking App</h1>
            <div style={{ margin: 40, fontSize: 25 }}>
                <Link style={style} to={'/addingredient'}>
                    Add Ingredient
                </Link>
                <Link style={style} to={'/createrecipe'}>
                    Create Recipe
                </Link>
                <Link style={style} to={'/viewrecipes'}>
                    View REcipes
                </Link>
            </div>
            <hr />
            <Routes>
                <Route path="/addingredient" element={<FCIngredient />} />
                <Route path="/createrecipe" element={<FCRecipes />} />
                <Route path="/viewrecipes" element={<FCViewRecipe />} />
            </Routes>
        </div>
    );
}
