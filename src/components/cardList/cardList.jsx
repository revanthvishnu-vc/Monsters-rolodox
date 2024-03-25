import "./cardList.css";
import Card from "../card/card.jsx";

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
};

export default CardList;
