import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getCharactersByUserId, getCharacterById } from '../DataManager/CharacterManager';
import { userStorageKey } from '../auth/authSettings';
import './CharacterPage.css'
import { floor } from 'mathjs'

export const CharacterPage = () => {
    const [isLoading, setIsLoading] = useState([]);
    const [userCharacters, setUserCharacters] = useState([]);
    const [character, setCharacter] = useState([]);
    const history = useHistory();


    const characterArr = () => { getCharactersByUserId(parseInt(sessionStorage.getItem(userStorageKey))).then(Response => { setUserCharacters(Response) }) };


    const characterDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"characters__" + obj.id} value={obj.id} >{obj.name}</option> })

        return dropdownArr;
    };

    //! I want to getCharacterById - 

    const handleControlledInputChange = (event) => {
        let selectedCharacter = { ...character }
        let selectedVal = event.target.value
        console.log(selectedVal)
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        selectedCharacter = getCharacterById(selectedVal).then(response => setCharacter(response))

    };

    const handleClickAddNewCharacter = (event) => {
        event.preventDefault()
        setIsLoading(true)
        history.push("/characters/add")
    }

    const statModifier = (stat) => {
        return (floor((stat - 10) / 2))
    };


    useEffect(() => {
        characterArr()
    }, []);

    return (
        <>
            <div className="characterControl">
                <div className="characterSelection">
                    <label htmlFor="character">Select Your Character:</label>
                    <select id="characterId" name="characters" size="3" onChange={handleControlledInputChange}>
                        <option id="noCharacterSelected" selected>Select a Character!</option>
                        {characterDropdown(userCharacters)}
                    </select>
                </div>
                <div>
                    <button onClick={handleClickAddNewCharacter}>Add Character</button>
                    <button>Edit Character</button>
                </div>
            </div>
            <hr></hr>
                <div className="CharacterHeader">
                    <h2>{character.name}</h2>
                    <div className="CharacterSubHeader">
                    <p className="subHeaderItem">Level: {character.level} {character.race} {character.class} </p>
                    <p className="subHeaderItem">Experience: {character.experience}</p>
                    <p className="subHeaderItem">Alignment: {character.alignment}</p>
                    <p className="subHeaderItem">Armor Class: {character.armorClass}</p>
                    <p className="subHeaderItem">Proficiency Bonus: +{character.proficiencyBonus}</p>
                    <p className="subHeaderItem">Max Hit Points: {character.hitPoints}</p>
                    </div>
                    <div className="CharacterStats">
                        <h3>Hit Points</h3>
                        <p className="centerStat">{character.hitPoints}</p>
                        <p>Need to make this one an editable counter</p>
                    </div>
                </div>
            <div className="CharacterSheet">
                <div className="CharacterStats">
                    <div className="CharacterStat">
                        <p>Strength</p>
                        <p className="centerStat">{character.strength}</p>
                        <p className="centerStat">
                            Modifier: {statModifier(character.strength)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Dexterity</p>
                        <p className="centerStat">{character.dexterity}</p>
                        <p className="centerStat">
                            Modifier: {statModifier(character.dexterity)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Constitution</p>
                        <p className="centerStat">{character.constitution}</p>
                        <p className="centerStat">
                            Modifier: {statModifier(character.constitution)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Intelligence</p>
                        <p className="centerStat">{character.intelligence}</p>
                        <p className="centerStat">
                            Modifier: {statModifier(character.intelligence)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Wisdom</p>
                        <p className="centerStat">{character.wisdom}</p>
                        <p className="centerStat">
                            Modifier: {statModifier(character.wisdom)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Charisma</p>
                        <p className="centerStat">{character.charisma}</p>
                        <p className="centerStat">
                            Modifier: {statModifier(character.charisma)}
                        </p>
                    </div>
                </div>
                <div className="characterSkills">
                    <h3>Skill Modifiers:</h3>
                    <p>Acrobatics: {statModifier(character.dexterity)}</p>
                    <p>Animal Handling: {statModifier(character.wisdom)}</p>
                    <p>Arcana: {statModifier(character.intelligence)}</p>
                    <p>Athletics: {statModifier(character.strength)}</p>
                    <p>Deception: {statModifier(character.charisma)}</p>
                    <p>History: {statModifier(character.intelligence)}</p>
                    <p>Insight: {statModifier(character.wisdom)}</p>
                    <p>Intimidation: {statModifier(character.charisma)}</p>
                    <p>Investigation: {statModifier(character.intelligence)}</p>
                    <p>Medicine: {statModifier(character.wisdom)}</p>
                    <p>Nature: {statModifier(character.intelligence)}</p>
                    <p>Perception: {statModifier(character.wisdom)}</p>
                    <p>Performance: {statModifier(character.charisma)}</p>
                    <p>Persuasion: {statModifier(character.charisma)}</p>
                    <p>Religion: {statModifier(character.intelligence)}</p>
                    <p>Sleight of Hand: {statModifier(character.dexterity)}</p>
                    <p>Stealth: {statModifier(character.dexterity)}</p>
                    <p>Survival: {statModifier(character.wisdom)}</p>
                </div>
                <div className="characterThrows">
                    <h3>Saving Throw Modifiers:</h3>
                    <p>Strength: {statModifier(character.strength)}</p>
                    <p>Dexterity: {statModifier(character.dexterity)}</p>
                    <p>Constitution: {statModifier(character.constitution)}</p>
                    <p>Intelligence: {statModifier(character.intelligence)}</p>
                    <p>Wisdom: {statModifier(character.wisdom)}</p>
                    <p>Charisma: {statModifier(character.charisma)}</p>
                </div>
            </div>
        </>
    )
}