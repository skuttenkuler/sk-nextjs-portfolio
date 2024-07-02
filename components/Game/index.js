import React, {useState, useEffect, useRef } from 'react'
import {SkilltroidsGame} from './Game'

export const GameApp = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    return(
        <div>
            {!gameOver ? (
                <SkilltroidsGame/>
            ):( 
                null
           )}
        </div>
    )
}
