import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { addCharacter } from '../DataManager/CharacterManager'
import { userStorageKey } from '../auth/authSettings'

export const CharacterForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [character, setCharacter] = useState({
        name: "",
        userId: parseInt(sessionStorage.getItem(userStorageKey)),
        level: "",
        race: "",
        class: "",
        alignment: "",
        experience: "",
        hitPoints: "",
        armorClass: "",
        proficiencyBonus: "",
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: "",
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCharacter = { ...character }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newCharacter[event.target.id] = selectedVal
        setCharacter(newCharacter)
    };

    const handleClickSaveCharacter = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addCharacter(character)
            .then(() => history.push("/characters/skills"))
    };

    return (
        <form className="characterForm">
            <h2 className="characterForm__title">Add a new Character</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value={character.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="level">Level:</label>
                    <input type="number" maxLength="2" min="1" max="20" id="level" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.level} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="race">Race:</label>
                    <input type="text" id="race" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value={character.race} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="class">Class:</label>
                    <input type="" id="class" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value={character.class} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="alignment">Alignment:</label>
                    <input type="text" id="alignment" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value={character.alignment} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="experience">Experience:</label>
                    <input type="number" id="experience" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="0" value={character.experience} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hitPoints">Hit Points:</label>
                    <input type="number" maxLength="3" min="0" max="300" id="hitPoints" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.hitPoints} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="armorClass">Armor Class:</label>
                    <input type="number" maxLength="2" min="0" max="30" id="armorClass" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.armorClass} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="proficiencyBonus">Proficiency Bonus:</label>
                    <input type="number" maxLength="2" min="0" max="20" id="proficiencyBonus" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.proficiencyBonus} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="strength">Strength:</label>
                    <input type="number" maxLength="2" min="0" max="20" id="strength" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.strength} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dexterity">Dexterity:</label>
                    <input type="number" maxLength="2" min="0" max="20" id="dexterity" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.dexterity} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="constitution">Constitution:</label>
                    <input type="number" maxLength="2" min="0" max="20" id="constitution" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.constitution} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="intelligence">Intelligence:</label>
                    <input type="number" maxLength="2" min="0" max="20"id="intelligence" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.intelligence} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="wisdom">Wisdom:</label>
                    <input type="number" maxLength="2" min="0" max="20" id="wisdom" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.wisdom} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="charisma">Charisma:</label>
                    <input type="number" maxLength="2" min="0" max="20" id="charisma" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1" value={character.charisma} />
                </div>
            </fieldset>
            <button className="button"
                onClick={handleClickSaveCharacter}
                disabled={isLoading}>
                Save Character And Add Skills
            </button>
        </form>
    )
}
