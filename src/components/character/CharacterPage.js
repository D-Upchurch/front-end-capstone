import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getCharactersByUserId, getCharacterById, deleteCharacter, getCharacterSkills, getCharacterThrows } from '../DataManager/CharacterManager';
import { userStorageKey } from '../auth/authSettings';
import './CharacterPage.css'
import { floor } from 'mathjs'
import { Link } from 'react-router-dom'


export const CharacterPage = () => {
    const [isLoading, setIsLoading] = useState([]);
    const [userCharacters, setUserCharacters] = useState([]);
    const [character, setCharacter] = useState([]);
    const [skill, setSkill] = useState([]);
    const [savingThrow, setSavingThrow] = useState([])
    const history = useHistory();


    const characterArr = () => { getCharactersByUserId(parseInt(sessionStorage.getItem(userStorageKey))).then(Response => { setUserCharacters(Response) }) };


    const characterDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"characters__" + obj.id} value={obj.id} >{obj.name}</option> })

        return dropdownArr;
    };

    const characterSkills = () => {
        getCharacterSkills(character.id)
            .then(response => {
                const skillsArr = response.map(obj => { return obj.skill.name })
                setSkill(skillsArr);
            });
    };

    const characterThrows = () => {
        getCharacterThrows(character.id)
            .then(response => {
                const throwsArr = response.map(obj => { return obj.throw.name })
                setSavingThrow(throwsArr);
            });
    };


    const handleControlledInputChange = (event) => {
        let selectedCharacter = { ...character }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        selectedCharacter = getCharacterById(selectedVal).then(response => setCharacter(response))

    };

    const handleDeleteCharacter = (id) => {
        deleteCharacter(id)
            .then(() => setCharacter(userCharacters[0]))

    };

    const handleClickAddNewCharacter = (event) => {
        event.preventDefault()
        setIsLoading(true)
        history.push("/characters/add")
    }

    const statModifier = (stat, statName) => {
        if(skill.includes(statName) || savingThrow.includes(statName)) {
            
            return ((floor((stat -10) / 2)) + parseInt(character.proficiencyBonus))
        }
        else {return (floor((stat - 10) / 2))}
    };

    const baseStatModifier = (stat) => {
        return (floor((stat - 10) / 2))
    }

    useEffect(() => {
        characterSkills()
    }, [character])

    useEffect(() => {
        characterThrows()
    }, [character])


    useEffect(() => {
        characterArr()
    }, []);

    return (
        <>
            
            <div className="characterControl">
                <div className="characterSelection">
                    <label htmlFor="character">Select Your Character:</label>
                    <select id="characterId" name="characters" size="3" onChange={handleControlledInputChange} defaultValue={userCharacters[0]}>
                        {characterDropdown(userCharacters)}
                    </select>
                </div>
                <div>
                    <button onClick={handleClickAddNewCharacter}>Add Character</button>
                    <Link to={`/characters/${character.id}/edit`}>
                        <button>Edit Character</button>
                    </Link>
                    <button type="button" onClick={() => handleDeleteCharacter(character.id)}>Delete Character</button>
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
                {/* <div className="CharacterStats">
                        <h3>Hit Points</h3>
                        <p className="centerStat">{character.hitPoints}</p>
                        <p>Need to make this one an editable counter</p>
                    </div> */}
            </div>
            <div className="CharacterSheet">
                <div className="CharacterStats">
                    <div className="CharacterStat">
                        <p>Strength</p>
                        <p className="centerStat">{character.strength}</p>
                        <p className="centerStat">
                            Modifier: {baseStatModifier(character.strength)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Dexterity</p>
                        <p className="centerStat">{character.dexterity}</p>
                        <p className="centerStat">
                            Modifier: {baseStatModifier(character.dexterity)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Constitution</p>
                        <p className="centerStat">{character.constitution}</p>
                        <p className="centerStat">
                            Modifier: {baseStatModifier(character.constitution)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Intelligence</p>
                        <p className="centerStat">{character.intelligence}</p>
                        <p className="centerStat">
                            Modifier: {baseStatModifier(character.intelligence)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Wisdom</p>
                        <p className="centerStat">{character.wisdom}</p>
                        <p className="centerStat">
                            Modifier: {baseStatModifier(character.wisdom)}
                        </p>
                    </div>
                    <div className="CharacterStat">
                        <p>Charisma</p>
                        <p className="centerStat">{character.charisma}</p>
                        <p className="centerStat">
                            Modifier: {baseStatModifier(character.charisma)}
                        </p>
                    </div>
                </div>
                <div className="characterSkills">
                    <h3>Skill Modifiers:</h3>
                    <p>Acrobatics: {statModifier(character.dexterity, "Acrobatics")}</p>
                    <p>Animal Handling: {statModifier(character.wisdom, "Animal Handling")}</p>
                    <p>Arcana: {statModifier(character.intelligence, "Arcana")}</p>
                    <p>Athletics: {statModifier(character.strength, "Athletics")}</p>
                    <p>Deception: {statModifier(character.charisma, "Deception")}</p>
                    <p>History: {statModifier(character.intelligence, "History")}</p>
                    <p>Insight: {statModifier(character.wisdom, "Insight")}</p>
                    <p>Intimidation: {statModifier(character.charisma, "Intimidation")}</p>
                    <p>Investigation: {statModifier(character.intelligence, "Investigation")}</p>
                    <p>Medicine: {statModifier(character.wisdom, "Medicine")}</p>
                    <p>Nature: {statModifier(character.intelligence, "Nature")}</p>
                    <p>Perception: {statModifier(character.wisdom, "Perception")}</p>
                    <p>Performance: {statModifier(character.charisma, "Performance")}</p>
                    <p>Persuasion: {statModifier(character.charisma, "Persuasion")}</p>
                    <p>Religion: {statModifier(character.intelligence, "Religion")}</p>
                    <p>Sleight of Hand: {statModifier(character.dexterity, "Sleight of Hand")}</p>
                    <p>Stealth: {statModifier(character.dexterity, "Stealth")}</p>
                    <p>Survival: {statModifier(character.wisdom, "Survival")}</p>
                </div>
                <div className="characterThrows">
                    <h3>Saving Throw Modifiers:</h3>
                    <p>Strength: {statModifier(character.strength, "Strength")}</p>
                    <p>Dexterity: {statModifier(character.dexterity, "Dexterity")}</p>
                    <p>Constitution: {statModifier(character.constitution, "Constitution")}</p>
                    <p>Intelligence: {statModifier(character.intelligence, "Intelligence")}</p>
                    <p>Wisdom: {statModifier(character.wisdom, "Wisdom")}</p>
                    <p>Charisma: {statModifier(character.charisma, "Charisma")}</p>
                </div>
            </div>
        </>
    )
}