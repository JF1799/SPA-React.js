import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { getHeroById } from "../../selector/getHeroById";

export const HeroeScreen = ({ history }) => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);

  // console.log(hero);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        ></img>
      </div>

      <div className="col-8">
        <h3> {superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b> ALTER EGO:</b> {alter_ego}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b> publisher :</b> {publisher}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b> first_appearance:</b> {first_appearance}{" "}
          </li>
        </ul>
        <h5>characters</h5>
        <p> {characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          {" "}
          Back
        </button>
      </div>
    </div>
  );
};
