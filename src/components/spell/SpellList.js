import React, { useState, useEffect } from 'react'
import { userStorageKey } from '../auth/authSettings'

import { getSpells } from '../DataManager/SpellManager'

export const SpellList = () => {
    const [spells, setSpells] = useState([]);

    getSpells()

   return <h3>hello</h3>
}