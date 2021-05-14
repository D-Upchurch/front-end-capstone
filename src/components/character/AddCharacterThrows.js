import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCharactersByUserId, addThrow, getThrows, getCharacterThrows, deleteThrow } from '../DataManager/CharacterManager';
import { userStorageKey } from '../auth/authSettings';
import "./CharacterSkills.css"

export const CharacterThrows = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characterThrows, setCharacterThrows] = useState([])
    const [characters, setCharacters] = useState([]);
    const [throws, setThrows] = useState([]);
    const [SavingThrow, setSavingThrow] = useState({
        characterId: "",
        throwId: ""
    });

    const characterArr = () => { getCharactersByUserId(parseInt(sessionStorage.getItem(userStorageKey))).then(Response => { setCharacters(Response) }) };

    const throwsArr = () => { getThrows().then(Response => { setThrows(Response) }) };

    const characterThrowsArr = () => { getCharacterThrows(SavingThrow.characterId).then(Response => { setCharacterThrows(Response) }) }

    useEffect(() => {
        throwsArr()
    }, [])

    useEffect(() => {
        characterArr()
    }, [])

    useEffect(() => {
        characterThrowsArr()
    }, [SavingThrow])

    const characterDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"characters__" + obj.id} value={obj.id} >{obj.name}</option> })

        return dropdownArr;
    }

    //! value = event.target.value
    const throwsDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"savingThrows__" + obj.id} value={obj.id}>{obj.name}</option> })

        return dropdownArr;
    }

    const characterThrowsDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.id} id={"characterThrows__" + obj.id} value={obj.id}>{obj.throw.name}</option> })

        return dropdownArr;
    }



    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newThrow = { ...SavingThrow }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newThrow[event.target.id] = selectedVal
        setSavingThrow(newThrow)
    };


    const handleClickSaveThrow = (event) => {
        event.preventDefault()
        setIsLoading(true)
        getCharacterThrows(SavingThrow.characterId).then(response => {

            if (response.length === 2) {
                return alert("Your character can only be proficient in 2 Saving Throws")
            }
            else if (response.length < 2) {
                addThrow(SavingThrow).then(() => characterThrowsArr())
                setIsLoading(false)
            }
        })
    };

    const handleClickNextPage = (event) => {
        event.preventDefault()
        setIsLoading(true)
        history.push("/characters")
    }

    const handleDeleteThrow = (event) => {
        event.preventDefault()
        deleteThrow(SavingThrow.characterThrows)
            .then(() => { characterThrowsArr() })
    }

    return (
        <>
            <div className="skillPageWrapper">
                <h2>Select a character to add a saving throw to:</h2>
                <div className="skillForm-flex">
                    <div className="form-group">
                        <h3>Character:</h3>
                        <select id="characterId" className="form-dropdown" name="characters" size="5" onChange={handleControlledInputChange}>
                            {characterDropdown(characters)}
                        </select>
                    </div>
                </div>
                <h2>Select a saving throw to add:</h2>
                <div className="skillForm-flex">
                    <div className="form-group">
                        <h3>Saving Throws:</h3>
                        <select id="throwId" className="form-dropdown" name="throws" size="5" onChange={handleControlledInputChange}>
                            {throwsDropdown(throws)}
                        </select>
                    </div>
                </div>

                <button id="addThrow" className="button" onClick={handleClickSaveThrow}>Add Throw</button>
                <h2>Delete a throw from selected character:</h2>
                <div className="skillForm-flex">
                    <div className="form-group">
                        <h3>Selected Character's Saving Throws:</h3>
                        <select id="characterThrows" className="form-dropdown" name="characterThrows" size="5" onChange={handleControlledInputChange}>
                            {characterThrowsDropdown(characterThrows)}
                        </select>
                    </div>
                </div>
                
                <button id="deleteThrow" className="button" disabled={isLoading} onClick={handleDeleteThrow}>Delete Throw</button>
                <hr></hr>
                <button id="characterPage" className="button" onClick={handleClickNextPage}>Back to Character Page</button>
                <hr></hr>
            </div>
        </>
    )
}

