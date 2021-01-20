import React from 'react';

import "./card.css";

export const Card = props => (
   <div className="card-container">
       <img src={`https://robohash.org/${props.person.id}?set=set2&size=180x180`} alt=""/>
       <h2>{props.person.name}</h2>
       <p>{props.person.email}</p>
   </div>
)

export default Card;