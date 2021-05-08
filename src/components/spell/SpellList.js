import React, { useState, useEffect } from 'react'
import { userStorageKey } from '../auth/authSettings'
import { getSpellsByUserId, deleteSpell } from '../DataManager/SpellManager'
import { Link } from 'react-router-dom'
import './SpellList.css'

export const SpellList = () => {
    const [spells, setSpells] = useState([]);

    const user = parseInt(sessionStorage.getItem(userStorageKey))

    const userSpells = () => {
        getSpellsByUserId(user)
            .then(response => { setSpells(response) })
    };



    const spellCards = (array) => {
        let spellObject = array.map(obj => {
            return (
                <div className="spellCard">
                    <div className="spellCardDetails">
                        <h2>{obj.name}</h2>
                        <p>{obj.level}</p>
                        <p>{obj.school}</p>
                        <p>{obj.components}</p>
                        <p>{obj.description}</p>
                        <p>{obj.higherLevels}</p>
                    </div>
                    <div className="spellCardButton">
                        <button className="button" onClick={() => { handleDeleteSpell(obj.id) }}>Remove Spell</button>
                    </div>
                </div>
            )
        })
        return spellObject;
    };

    const handleDeleteSpell = (id) => {
        deleteSpell(id)
            .then(() => {
                userSpells()
            })
    };

    useEffect(() => {
        userSpells()
    }, [])

    return (
        <>
            <div className="spellPage">
                <Link className="addButton" to={`/spells/add`}>
                    <button className="button" >Add Spells</button>

                </Link>
                <div className="spellBook">
                    {spellCards(spells)}

                </div>
            </div>
        </>
    )
}
