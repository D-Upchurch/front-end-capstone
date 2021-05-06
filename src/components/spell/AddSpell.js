import React, { useState, useEffect } from 'react';
import { userStorageKey } from '../auth/authSettings';
import { getSpells, getSpellBySlug, addSpell } from '../DataManager/SpellManager';
import { useHistory } from 'react-router-dom';

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
        console.log(selectedVal)
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
        <form>
            <h2>Spell Dropdown</h2>
            <fieldset>
                <label htmlFor="spellDropdown">Spells:</label>
                <select size="15" onChange={handleControlledInputChange}>
                    {spellDropdown(spells)}
                </select>
            </fieldset>
            <button id="addSpell" className="button" onClick={handleAddSpell}>Add Spell</button>
            <button id="spellbook" className="button" onClick={handleClickSpellbook}>Back to Spellbook</button>
        </form>
    )
}