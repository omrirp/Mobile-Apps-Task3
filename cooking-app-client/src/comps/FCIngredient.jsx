export default function FCIngredient(props) {
    const data = props.data;

    return (
        <div className={data.Id} style={{ border: '1px solid black', margin: 20, float: 'left' }}>
            <h2>{data.Name}</h2>
            <input className={data.Id}
                type="checkbox"
                value={data.Name}/>Use ingredient<br />

            <img src={data.ImageURL} style={{ height: 100, width: 100 }} alt="" />
            <h3>{data.Calories} caloriess</h3>
        </div>
    );
}
