import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCharactersByUserId, addSkill, getSkills, getCharacterSkills, deleteSkill } from '../DataManager/CharacterManager';
import { userStorageKey } from '../auth/authSettings';
import "./CharacterSkills.css"

export const CharacterSkills = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [characterSkills, setCharacterSkills] = useState([])
    const [characters, setCharacters] = useState([])
    const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState({
        characterId: "",
        skillId: ""
    });

    const characterArr = () => { getCharactersByUserId(parseInt(sessionStorage.getItem(userStorageKey))).then(Response => { setCharacters(Response) }) };

    const skillsArr = () => { getSkills().then(Response => { setSkills(Response) }) }

    const characterSkillsArr = () => { getCharacterSkills(skill.characterId).then(Response => { setCharacterSkills(Response)})};

    useEffect(() => {
        skillsArr()
    }, [])

    useEffect(() => {
        characterArr()
    }, [])

    useEffect(() => {
        characterSkillsArr()
    }, [skill])

    const characterDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"characters__" + obj.id} value={obj.id} >{obj.name}</option> })

        return dropdownArr;
    }

    //! value = event.target.value
    const skillsDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"skills__" + obj.id} value={obj.id}>{obj.name}</option> })

        return dropdownArr;
    }

    const characterSkillsDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"characterSkills__" + obj.id} value={obj.id}>{obj.skill.name}</option>})

        return dropdownArr;
    }


    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newSkill = { ...skill }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newSkill[event.target.id] = selectedVal
        console.log(newSkill)
        setSkill(newSkill)
    };

    const handleClickSaveSkill = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addSkill(skill)
            .then(() => {
                characterSkillsArr()
                alert(`Skill added to character!`)
                setIsLoading(false);
    })};

    const handleClickNextPage = (event) => {
        event.preventDefault()
        setIsLoading(true)
        history.push("/characters/throws")
    }

    const handleDeleteSkill = (event) => {
        event.preventDefault()
        
        console.log(skill.characterSkillId, "pre delete skill id")
        deleteSkill(skill.characterSkillId)
        .then(() => {characterSkillsArr()})
    }

    return (
        <div className="skillPageWrapper">
        <form className="skillForm">
            <h2 className="skillForm__title">Select and add the skills your character is proficient in:</h2>
            <div className="skillForm-flex">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="character">Character:</label>
                        <select id="characterId" name="characters" size="5" onChange={handleControlledInputChange}>
                            {characterDropdown(characters)}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="skills">Skills:</label>
                        <select id="skillId" name="skills" size="5" onChange={handleControlledInputChange}>
                            {skillsDropdown(skills)}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="characterSkills">Character's Skills:</label>
                        <select id="characterSkillId" name="characterSkills" size="5" onChange={handleControlledInputChange}>
                            {characterSkillsDropdown(characterSkills)}
                        </select>
                        
                    </div>
                </fieldset>
            </div>
            <button id="addSkill" className="button" disabled={isLoading} onClick={handleClickSaveSkill}>Add Skill</button>
            <button id="nextPage" className="button" onClick={handleClickNextPage}>Click here to add saving Throws!</button>
            <button id="deleteSkill" className="button" disabled={isLoading} onClick={handleDeleteSkill}>Delete Skill</button>

        </form>
        </div>
    )
}


//! I need to getSkills, set the response to a variable that I can map over to populate a dropdown that I can then get the Id of the selected skill and use that value to add that skill to the characterSkills join table.

//! I also need to getCharactersByUserId, and set the response to a variable that I can map over for the first dropdown so that only the logged in user's characters will display in the dropdown. This should also allow me to get the characterId value to add the character to the characterSkills join table.

