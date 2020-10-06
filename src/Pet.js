import React from "react";
import { Link } from "@reach/router";

export default function Pet(props) {
  let hero = "http://placecorgi.com/300/300";

  if (props.media.length) {
    hero = props.media[0].small;
  }

  return (
    <Link to={`/details/${props.id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={props.name} />
      </div>

      <div className="info">
        <h1>{props.name}</h1>
        <h2>{`${props.animal} - ${props.breed} -${props.location}`}</h2>
      </div>
    </Link>
  );
}
