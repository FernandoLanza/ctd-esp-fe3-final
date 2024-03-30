import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/DentistContext";
import '../index.css';


const Card = ({ item }) => {

  const { dispatch } = useDentistStates()
  const [icon, setIcon] = useState("🤍")

  const handleReactionClick = () => {
    if (icon === "🤍"){
      setIcon("💓");
      dispatch({ type: 'ADD_FAV', payload: item})
    } else {
      setIcon("🤍");
      dispatch({ type: 'REMOVE_FAV', payload: item})
    }
  }

  return (
    <div className="card" >
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={'/detail/' + item.id}>
        <img className="card_img" src="/public/images/doctor.jpg" alt="DocPic" width={200}></img>
        <h3>Name: {item.name}</h3>
      </Link>
      <h4>UserName: {item.username}</h4>
      <h5>Id: {item.id}</h5>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <button onClick={() => handleReactionClick()} className="favButton">{icon}</button>
    </div>
  );
};

export default Card;


