import React, { useState, useEffect } from 'react';
import { userStorageKey } from '../auth/authSettings';
import { getSpells, getSpellBySlug, addSpell } from '../DataManager/SpellManager';
import { useHistory } from 'react-router-dom';
import './SpellList.css'

export const AddSpell = () => {
    const [spells, setSpells] = useState([]);
    const [addedSpell, setAddedSpell] = useState({
        userId: parseInt(sessionStorage.getItem(userStorageKey)),
        name: "",
        school: "",
        level: "",
        components: "",
        class: "",
        description: "",
        higherLevels: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newSpell = { ...addedSpell }
        let selectedVal = event.target.value
    
        getSpellBySlug(selectedVal)
            .then(res => { res.results.map(obj => { setAddedSpell(obj) }) })
    }

    const handleAddSpell = (event) => {
        event.preventDefault()
        addSpell(addedSpell)
            .then(response => { alert("Spell added to spell book!") })
    }

    const handleClickSpellbook = (event) => {
        event.preventDefault()
        history.push("/spells")
    }

    const spellArr = () => { getSpells().then(response => { setSpells(response.results) }) }

    const spellDropdown = (array) => {
        const dropdownArr = array.map(obj => { return <option key={obj.slug} id={"spells__" + obj.index} value={obj.slug}>{obj.name}</option> })

        return dropdownArr
    };


    useEffect(() => {
        spellArr()
    }, [])


    return (
        <div className="pageWrapper">
            <form>
                
                <fieldset className="spellDropdown">
                    <label htmlFor="spellDropdown">Pick a spell and click -Add Spell- to add the selected spell to your Spellbook:</label>
                    <select size="10" className="spellDropdownList" onChange={handleControlledInputChange}>
                        {spellDropdown(spells)}
                    </select>
                </fieldset>
                <div className="spellButtons">
                    <button id="addSpell" className="spellButton" onClick={handleAddSpell}>Add Spell</button>
                    <button id="spellbook" className="spellButton" onClick={handleClickSpellbook}>Back to Spellbook</button>
                </div>
            </form>
        </div>
    )
}