import React from 'react'
import { Route } from 'react-router-dom'
import { CharacterPage } from './components/character/CharacterPage'
import { AddCharacter } from './components/character/AddCharacter'
import { EditCharacter } from './components/character/EditCharacter'
import { SpellList } from './components/SpellList'
import { DiceRoller } from './components/DiceRoller'


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/characters">
                <CharacterPage />
            </Route>
            <Route path="/characters/add">
                <AddCharacter />
            </Route>
            <Route path="/characters/:characterId(\d+)/edit">
                <EditCharacter />
            </Route>
            <Route path="/spells">
                <SpellList />
            </Route>
            <Route path="/dice">
                <DiceRoller />
            </Route>
        </>
    )
}