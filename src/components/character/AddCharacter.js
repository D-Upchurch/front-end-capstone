import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { addCharacter } from '../DataManager/CharacterManager'
import { userStorageKey } from './components/auth/authSettings'

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
        skills: ,
        savingThrows: 
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
            .then(() => history.push("/characters"))
    };

    return (
        <form className="characterForm">
            <h2 className="characterForm__title">Add a new Character</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Character name" value={character.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="level">Level:</label>
                    <input type="text" id="level" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Level" value={character.level} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="race">Race:</label>
                    <input type="text" id="race" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Race" value={character.race} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="class">Class:</label>
                    <input type="text" id="class" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Class" value={character.class} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="alignment">Alignment:</label>
                    <input type="text" id="alignment" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Alignment" value={character.alignment} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="experience">Experience:</label>
                    <input type="text" id="experience" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Experience" value={character.experience} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hitPoints">Hit Points:</label>
                    <input type="text" id="hitPoints" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Hit Points" value={character.hitPoints} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="armorClass">Armor Class:</label>
                    <input type="text" id="armorClass" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Armor Class" value={character.armorClass} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="proficiencyBonus">Proficiency Bonus:</label>
                    <input type="text" id="proficiencyBonus" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Proficiency Bonus" value={character.proficiencyBonus} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="strength">Strength:</label>
                    <input type="text" id="strength" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Strength" value={character.strength} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dexterity">Dexterity:</label>
                    <input type="text" id="dexterity" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Dexterity" value={character.dexterity} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="constitution">Constitution:</label>
                    <input type="text" id="constitution" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Constitution" value={character.constitution} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="intelligence">Intelligence:</label>
                    <input type="text" id="intelligence" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Intelligence" value={character.intelligence} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="wisdom">Wisdom:</label>
                    <input type="text" id="wisdom" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Wisdom" value={character.wisdom} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="charisma">Charisma:</label>
                    <input type="text" id="charisma" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Charisma" value={character.charisma} />
                </div>
            </fieldset>
            <button className="button"
                onClick={handleClickSaveCharacter}
                disabled={isLoading}>
                Save Character
            </button>
        </form>
    )
}
