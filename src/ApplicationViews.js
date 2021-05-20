import React from 'react'
import { Route } from 'react-router-dom'
import { CharacterPage } from './components/character/CharacterPage'
import { CharacterForm } from './components/character/AddCharacter'
import { CharacterSkills } from './components/character/AddCharacterSkills'
import { CharacterThrows } from './components/character/AddCharacterThrows'
import { EditCharacter } from './components/character/EditCharacter'
import { SpellList } from './components/spell/SpellList'
import { DiceRoller } from './components/DiceRoller'
import { AddSpell } from './components/spell/AddSpell'


export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/characters">
                <CharacterPage />
            </Route>
            <Route path="/characters/add">
                <CharacterForm />
            </Route>
            <Route path="/characters/skills">
                <CharacterSkills />
            </Route>
            <Route path="/characters/throws">
                <CharacterThrows />
            </Route>
            <Route path="/characters/:characterId(\d+)/edit">
                <EditCharacter />
            </Route>
            <Route exact path="/spells">
                <SpellList />
            </Route>
            <Route path="/spells/add">
                <AddSpell />
            </Route>
            <Route path="/dice">
                <DiceRoller />
            </Route>

        </>
    )
}