import { Component } from "react";
import "./cardList.css";
import Card from "../card/card.jsx"

class CardList extends Component {
    render(){
        console.log('render from Cardlist');
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                   return(
                    <Card monster={monster} />
                   )
                    })}
            </div>
        )
    }
}

export default CardList;
