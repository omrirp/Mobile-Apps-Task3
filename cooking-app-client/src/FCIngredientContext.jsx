import { createContext, useState } from "react";

export const IngredientContext =createContext();
export default function FCIngredientContextProvider(props){
    const [ingredientList,setIngredientList]=useState([]);

   

    return(
        <IngredientContext.Provider value={{ingredientList,setIngredientList}}>
        {props.children}
        </IngredientContext.Provider>
    )
}