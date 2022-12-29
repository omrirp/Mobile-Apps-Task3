export default function FCIngredient(props) {
    const data = props.data;

    return (
        <div style={{ border: '1px solid black', margin: 20, float: 'left', minWidth: 200 }}>
            <h2>{data.Name}</h2>
            <img src={data.ImageURL} style={{ height: 130, width: 130 }} alt="" />
            <h3>{data.Calories} calories</h3>
        </div>
    );
}
