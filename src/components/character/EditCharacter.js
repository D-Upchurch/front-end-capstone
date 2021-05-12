import React, { useState, useEffect } from 'react';
import { editCharacter, getCharacterById } from '../DataManager/CharacterManager';
import { useParams, useHistory } from 'react-router-dom';
import './EditCharacter.css'

export const EditCharacter = () => {
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { characterId } = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = { ...character };
        let editedVal = event.target.value;

        console.log(event.target.id)

        if (event.target.id.includes("name")) {
            editedVal = editedVal
        }
        else if (event.target.id.includes("race")) {
            editedVal = editedVal
        }
        else if (event.target.id.includes("class")) {
            editedVal = editedVal
        }
        else if (event.target.id.includes("alignment")) {
            editedVal = editedVal
        }
        else {
            console.log(event.target.value, "inside else")
            editedVal = parseInt(editedVal)
        }

        stateToChange[event.target.id] = editedVal;
        setCharacter(stateToChange);
    };

    const updateCharacter = (evt) => {
        evt.preventDefault();
        setIsLoading(true);

        const editedCharacter = {
            id: characterId,
            name: character.name,
            userId: character.userId,
            level: character.level,
            race: character.race,
            class: character.class,
            alignment: character.alignment,
            experience: character.experience,
            hitPoints: character.hitPoints,
            armorClass: character.armorClass,
            proficiencyBonus: character.proficiencyBonus,
            strength: character.strength,
            dexterity: character.dexterity,
            constitution: character.constitution,
            intelligence: character.intelligence,
            wisdom: character.wisdom,
            charisma: character.charisma
        };

        editCharacter(editedCharacter)
            .then(() => history.push("/characters"));
    };

    useEffect(() => {
        getCharacterById(characterId)
            .then((character) => {
                setCharacter(character);
            });
    }, []);

    return (
        <div className="editPageWrapper">
            <form className="characterForm">
                <h2 className="characterForm__title">Edit Character</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={handleFieldChange} required autoFocus className="form-control" value={character.name} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="level">Level:</label>
                        <input type="number" maxLength="2" min="1" max="20" id="level" onChange={handleFieldChange} required autoFocus className="form-control" value={character.level} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="race">Race:</label>
                        <input type="text" id="race" onChange={handleFieldChange} required autoFocus className="form-control" value={character.race} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="class">Class:</label>
                        <input type="text" id="class" onChange={handleFieldChange} required autoFocus className="form-control" value={character.class} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="alignment">Alignment:</label>
                        <input type="text" id="alignment" onChange={handleFieldChange} required autoFocus className="form-control" value={character.alignment} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="experience">Experience:</label>
                        <input type="number" id="experience" onChange={handleFieldChange} required autoFocus className="form-control" value={character.experience} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="hitPoints">Hit Points:</label>
                        <input type="number" maxLength="3" min="0" max="300" id="hitPoints" onChange={handleFieldChange} required autoFocus className="form-control" value={character.hitPoints} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="armorClass">Armor Class:</label>
                        <input type="number" maxLength="2" min="0" max="30" id="armorClass" onChange={handleFieldChange} required autoFocus className="form-control" value={character.armorClass} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="proficiencyBonus">Proficiency Bonus:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="proficiencyBonus" onChange={handleFieldChange} required autoFocus className="form-control" value={character.proficiencyBonus} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="strength">Strength:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="strength" onChange={handleFieldChange} required autoFocus className="form-control" value={character.strength} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="dexterity">Dexterity:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="dexterity" onChange={handleFieldChange} required autoFocus className="form-control" value={character.dexterity} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="constitution">Constitution:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="constitution" onChange={handleFieldChange} required autoFocus className="form-control" value={character.constitution} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="intelligence">Intelligence:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="intelligence" onChange={handleFieldChange} required autoFocus className="form-control" value={character.intelligence} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="wisdom">Wisdom:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="wisdom" onChange={handleFieldChange} required autoFocus className="form-control" value={character.wisdom} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="charisma">Charisma:</label>
                        <input type="number" maxLength="2" min="0" max="20" id="charisma" onChange={handleFieldChange} required autoFocus className="form-control" value={character.charisma} />
                    </div>
                </fieldset>
                <div className="centerButton">
                    <button className="editCharacterButton"
                        onClick={updateCharacter}>
                        Update Character
                    </button>
                </div>
            </form>
        </div>
    )

}