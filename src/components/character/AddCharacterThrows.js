import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCharactersByUserId, addThrow, getThrows} from '../DataManager/CharacterManager';
import { userStorageKey } from '../auth/authSettings';

export const CharacterThrows = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [throws, setThrows] = useState([]);
  
    const [SavingThrow, setSavingThrow] = useState({
        characterId: "",
        throwId: ""
    });

    const characterArr = () => {getCharactersByUserId(parseInt(sessionStorage.getItem(userStorageKey))).then(Response => {setCharacters(Response)})};

    const throwsArr = () => {getThrows().then(Response => {setThrows(Response)})};


    useEffect(() => {
        throwsArr()
    }, [])

    useEffect(() => {
        characterArr()
    }, [])

    const characterDropdown = (array) => {
        const dropdownArr = array.map(obj => {return <option key={obj.id} id={"characters__" +obj.id} value={obj.id} >{obj.name}</option>} )

        return dropdownArr;
    }

    //! value = event.target.value
    const throwsDropdown = (array) => {
         const dropdownArr = array.map(obj => {return <option key={obj.id} id={"savingThrows__" + obj.id} value={obj.id}>{obj.name}</option>})

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
        addThrow(SavingThrow)
    };

    const handleClickNextPage = (event) => {
        event.preventDefault()
        setIsLoading(true)
        history.push("/characters")
    }
    
    

    return (
        <form className="throwForm">
            <h2 className="throwForm__title">Select and add the saving throws your character is proficient in:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="character">Character:</label>
                    <select id="characterId" name="characters" size="3" onChange={handleControlledInputChange}>
                    {characterDropdown(characters)}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="throws">Saving Throws:</label>
                    <select id="throwId" name="throws" size="3" onChange={handleControlledInputChange}>
                    {throwsDropdown(throws)}
                    </select>
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="characterThrows">Selected Character's Saving Throws</label>
                    <select id="characterThrows" name="characterThrows" size="3" onChange={handleControlledInputChange}>
                        {characterThrowsDropdown(characterThrows)}
                    </select>
                </div>
            </fieldset> */}
            <button id="addThrow" className="button" onClick={handleClickSaveThrow}>Add Throw</button>
            <button id="characterPage" className="button" onClick={handleClickNextPage}>Back to Character Page</button>
        </form>
    )
}

