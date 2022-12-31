import { Routes, Route, Link } from 'react-router-dom';
import IngredientContextProvider from '../FCIngredientContext';
import FCIngredientForm from '../pages/FCIngredientForm';
import FCRecipeForm from '../pages/FCRecipeForm';
import FCViewRecipe from '../pages/FCVeiwRecipes';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FCHeader() {
    //const style = { margin: 40, fontSize: 25 };

    return (
        <div>
            <h1
                style={{
                    fontSize: 60,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'olive',
                }}
            >
                Cooking App
            </h1>
            <div style={{ margin: 40, fontSize: 25 }} className='navi'>
                <Link to={'/addingredient'} className='links'>
                    <Button variant='outline-primary'>Add Ingredient</Button>
                </Link>
                <Link to={'/createrecipe'} className='links'>
                    <Button variant='outline-primary'>Create Recipe</Button>
                </Link>
                <Link to={'/viewrecipes'} className='links'>
                    <Button variant='outline-primary'>View REcipes</Button>
                </Link>
            </div>
            <hr />

            <Routes>
                <Route path='/addingredient' element={<FCIngredientForm />} />
                <Route
                    path='/createrecipe'
                    element={
                        <IngredientContextProvider>
                            <FCRecipeForm />
                        </IngredientContextProvider>
                    }
                />
                <Route path='/viewrecipes' element={<FCViewRecipe />} />
            </Routes>
        </div>
    );
}
