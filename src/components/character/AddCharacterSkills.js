import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCharactersByUserId } from '../DataManager/CharacterManager';
import { userStorageKey } from '../auth/authSettings';

export const CharacterSkills = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [skill, setSkill] = useState({
        characterId: "",
        skillId: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newSkill = { ...skill }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newSkill[event.target.id] = selectedVal
        setSkill(newSkill)
    };

    const handleClickSaveSkill = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addSkill(skill)
            .then(() => history.push("/characters/throws"))
    };

    return (
        <form className="skillForm">
            <h2 className="skillForm__title">Select and add the skills your character is proficient in:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="character">Character:</label>
                </div>
            </fieldset>
        </form>
    )
}