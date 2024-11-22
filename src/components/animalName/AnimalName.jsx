import { useState } from "react";
import { animals } from "../../assets/AnimalsDb";

export default function AnimalName(props) {
  const [animalName, setAnimalName] = useState();
  const [index, setIndex] = useState();

  const number = Math.floor(Math.random() * 10) + 1;
  const animal = animals[number];

  return (
    <>
      <p>{animal.name}</p>
      {props.numfun(number)}
    </>
  );
}
