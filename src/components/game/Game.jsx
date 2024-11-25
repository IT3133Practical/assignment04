import React, { useEffect, useState } from 'react'
import AnimalName from '../animalName/AnimalName'
import Result from '../result/Result'

const Game = (props) => {
    const [result, setResult] = useState("")
    const [targetAnimals, setTargetAnimals] = useState(null)
    const [animalName, setAnimalName] = useState("")

    const getAnimals = () => {
        const index = Math.floor(Math.random() * props.animals.length);
        setTargetAnimals(props.animals[index])
        setResult("")
        setAnimalName(props.animals[index].name)
    }

    useEffect(() => {
        getAnimals()
    }, [])

    return (
        <div>
            <div>
                <h3>Animal Name</h3>
                <AnimalName name={animalName} />
                <hr />
                <h3>Result</h3>
                <Result result={result} />
                <hr />
            </div>
            <div>
                <h2>Select Animal</h2>
            </div>
            <div>
                {
                    props.animals && props.animals.map((animal, key) => {
                        return (
                            <div key={key}
                                onClick={() => {
                                    if (animal.name == targetAnimals.name) {
                                        setResult("Win")
                                    } else {
                                        setResult("Lost")
                                    }
                                }}
                            >
                                <img src={require(`../../assets/img/${animal.img}`)} />
                                {animal.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Game
