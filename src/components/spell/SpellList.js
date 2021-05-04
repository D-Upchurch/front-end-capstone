import React, { useState, useEffect } from 'react'
import { userStorageKey } from '../auth/authSettings'
import { getSpells } from '../DataManager/SpellManager'

// export const SpellList = () => {
//     const [spells, setSpells] = useState([]);

//     const spellArr = () => { getSpells().then(response => {setSpells(response)})}

//     useEffect(() => {
//         spellArr()
//     }, [])


//    return <h3>hello</h3>
// }