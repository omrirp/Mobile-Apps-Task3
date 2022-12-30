import { Routes, Route, Link } from 'react-router-dom';
import IngredientContextProvider, { IngredientContext } from '../FCIngredientContext';
import FCIngredientForm from '../pages/FCIngredientForm';
import FCRecipeForm from '../pages/FCRecipeForm';
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
            <IngredientContextProvider>
                <Routes>
                    <Route path="/addingredient" element={<FCIngredientForm />} />

                    <Route path="/createrecipe" element={<FCRecipeForm />} />

                    <Route path="/viewrecipes" element={<FCViewRecipe />} />
                </Routes>
            </IngredientContextProvider>
        </div>
    );
}
