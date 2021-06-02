import React from "react";
import { getHrosByPublisher } from "../../selector/getHrosByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = getHrosByPublisher(publisher);
  return (
    <div className="card-columns  animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
