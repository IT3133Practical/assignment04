import React from 'react'
import Game from '../../components/game/Game'
import { animals } from "../../AnimalsDb"

const Home = () => {
    return (
        <div>
            <Game animals={animals} />
        </div>
    )
}

export default Home
