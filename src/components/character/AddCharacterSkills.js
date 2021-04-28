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

    const handleControlledInputChange = (event)
}