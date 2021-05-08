import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { addCharacter } from '../DataManager/CharacterManager'
import { userStorageKey } from '../auth/authSettings'
import './AddCharacter.css'

export const CharacterForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [character, setCharacter] = useState({
        name: "",
        userId: parseInt(sessionStorage.getItem(userStorageKey)),
        level: 0,
        race: "",
        class: "",
        alignment: "",
        experience: 0,
        hitPoints: 0,
        armorClass: 0,
        proficiencyBonus: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCharacter = { ...character }
        let selectedVal = event.target.value
        if (event.target.id.includes("level, experience, hitPoints, armorClass, proficiencyBonus, strength, dexterity, constitution, intelligence, wisdom, charisma")) {
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
        <div className="addPageWrapper">
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
                        <input type="text" id="class" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value={character.class} />
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
                        <input type="number" id="experience" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.experience} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="hitPoints">Hit Points:</label>
                        <input type="number" maxLength="3" min="0" max="300" id="hitPoints" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.hitPoints} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="armorClass">Armor Class:</label>
                        <input type="number" maxLength="2" min="0" max="30" id="armorClass" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.armorClass} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="proficiencyBonus">Proficiency Bonus:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="proficiencyBonus" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.proficiencyBonus} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="strength">Strength:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="strength" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.strength} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="dexterity">Dexterity:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="dexterity" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.dexterity} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="constitution">Constitution:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="constitution" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.constitution} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="intelligence">Intelligence:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="intelligence" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.intelligence} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="wisdom">Wisdom:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="wisdom" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.wisdom} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="charisma">Charisma:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="charisma" onChange={handleControlledInputChange} required autoFocus className="form-control" value={character.charisma} />
                    </div>
                </fieldset>
                <div className="centerButton">
                <button className="addCharacterButton"
                    onClick={handleClickSaveCharacter}
                    disabled={isLoading}>
                    Save Character And Add Skills
            </button>
            </div>
            </form>
        </div>
    )
}
