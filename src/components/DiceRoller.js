import React, { useState, useEffect } from 'react'

import './DiceRoller.css'

export const DiceRoller = () => {

    const [roll, setRoll] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    //! This function will roll a d4.
    const rollD4 = () => {
        let roll = Math.floor(Math.random() * 4) + 1;

        setRoll(roll);
        setIsLoading(true);
    };

    //! This function will roll a d6.
    const rollD6 = () => {
        let roll = Math.floor(Math.random() * 6) + 1;

        setRoll(roll);
        setIsLoading(true);
    };
    //! This function will roll a d8.
    const rollD8 = () => {
        let roll = Math.floor(Math.random() * 8) + 1;

        setRoll(roll);
        setIsLoading(true);
    };
    //! This function will roll a d10.
    const rollD10 = () => {
        let roll = Math.floor(Math.random() * 10) + 1;

        setRoll(roll);
        setIsLoading(true);
    };
    //! This function will roll a d12.
    const rollD12 = () => {
        let roll = Math.floor(Math.random() * 12) + 1;

        setRoll(roll);
        setIsLoading(true);
    };
    //! This function will roll a d20.
    const rollD20 = () => {
        let roll = Math.floor(Math.random() * 20) + 1;

        setRoll(roll);
        
    };

    const handleRoll = (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (event.target.id === "d4") {
            rollD4()
        }
        else if (event.target.id === "d6") {
            rollD6()
        }
        else if (event.target.id === "d8") {
            rollD8()
        }
        else if (event.target.id === "d10") {
            rollD10()
        }
        else if (event.target.id === "d12") {
            rollD12()
        }
        else if (event.target.id === "d20") {
            rollD20()
        }
    }
    return (
        <div className="dicePage">
            <div className="buttonLayout">
                <button id="d4" onClick={handleRoll} className="button">Roll d4</button>
                <button id="d6" onClick={handleRoll} className="button">Roll d6</button>
                <button id="d8" onClick={handleRoll} className="button">Roll d8</button>
                <button id="d10" onClick={handleRoll} className="button">Roll d10</button>
                <button id="d12" onClick={handleRoll} className="button">Roll d12</button>
                <button id="d20" onClick={handleRoll} className="button">Roll d20</button>
            </div>
            <div hidden={!isLoading} className="rollContainer" >
                <h2 className="rollResult">You rolled {roll}!</h2>
            </div>
        </div>
    )
}
