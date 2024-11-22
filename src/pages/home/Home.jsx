import { useState } from "react";
import SelectAnimal from "../../components/animalSelect/AnimalSelect";
import Result from "../../components/result/Result";
import AnimalName from "../../components/animalName/AnimalName";

function Home() {
    const [number, setNumber] = useState();
    const [message, setMessage] = useState();
  
    const receiveNum = (num) => {
      setNumber(num)
    }
  
    const receiveMsg = (msg) => {
      setMessage(msg)
    }
  
    return (
      <div className="App">
        <div className="title">
          <h1>ANIMAL MATCHING GAME</h1>
        </div>
        <div className='container'>
          <div className="result">
            <Result message={message}/>
          </div>
          <div className="animalName">
            <AnimalName numfun={receiveNum}/>
          </div>
          <div className="animalPhotos">
            <SelectAnimal setResultMessage={receiveMsg}/>
          </div>
        </div>
      </div>
    );
  }

export default Home;
