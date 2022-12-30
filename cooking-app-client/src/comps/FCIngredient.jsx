import { useContext } from 'react';
import { IngredientContext } from '../FCIngredientContext';

export default function FCIngredient(props) {


    const { setIngredientList } = useContext(IngredientContext)
    const { ingredientList } = useContext(IngredientContext);

    const data = props.data;


    const changed = (e) => {
        let ing = {
            Id: e.target.className,
            Name: e.target.value
        };

        if (e.target.value) {
            if (ingredientList.some((i)=>i.Id===ing.Id)) {
                let newingarr=ingredientList.filter((i)=>
                    i.Id!==e.target.className
                )
                setIngredientList(newingarr);
                
            }
            else {
                setIngredientList((prev => [...prev,ing]))
                
            }

        }
        

    }
    return (
        
        <div className={data.Id} style={{ border: '1px solid black', margin: 20, float: 'left' }}>
            <h2>{data.Name}</h2>
            <input className={data.Id}
                type="checkbox"
                onChange={changed}
                value={data.Name} />Use ingredient<br />

            <img src={data.ImageURL} style={{ height: 100, width: 100 }} alt="" />
            <h3>{data.Calories} caloriess</h3>
        </div>
    );
}
