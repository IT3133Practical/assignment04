import { useState, useEffect } from "react";
import { animals } from "../../assets/AnimalsDb";

const shuffleArray = (array) => {
  const shfl = [...array];
  for (let i = shfl.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shfl[i], shfl[j]] = [shfl[j], shfl[i]];
  }
  return shfl;
};

export default function SelectAnimal(props) {
  const [shflAnimls, setShflAnimls] = useState([]);

  useEffect(() => {
    setShflAnimls(shuffleArray(animals));
  }, []);

  const handleImageClick = (index) => {
    if (index === props.num) {
      props.setResultMessage("Win");
    } else {
      props.setResultMessage("Lose");
    }
  };

  return (
    <div>
      {shflAnimls.map((animal, index) => (
        <div key={index}>
          <img
            src={require(`../../assets/pic/${animal.img}`)}
            alt={animal.name}
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
}
