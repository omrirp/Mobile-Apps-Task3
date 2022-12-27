export default function FCIngredient(props) {
    const style = { margin: 20, width: 300 };

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
        const ingredient = {
            name: ingNameInput,
            imageURL: ingImageUrlInput,
            calories: ingCaloriesInput,
        };
        console.log(ingredient);
        return false;
    };

    return (
        <div>
            <h2></h2>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 50, alignItems: 'center' }} className="form">
                <input style={style} onChange={addName} type="text" name="ingredientName" placeholder="ingredient name :" />
                <input style={style} onChange={addCalories} type="number" name="calories" placeholder="Calories:" />
                <input style={style} onChange={addImageURL} type="text" name="imageUrl" placeholder="imageUrl:" />
                <div>
                    <button onClick={submit} className="btns">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
