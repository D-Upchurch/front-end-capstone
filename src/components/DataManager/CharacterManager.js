const remoteURL = "http://localhost:8088"

//! This function will get all characters of a given user.
export const getCharactersByUserId = (userId) => {
    return fetch(`${remoteURL}/characters?userId=${userId}`)
    .then(response => response.json())
};

//! This function will get a single character for editing/deleting.
export const getCharacterById = (characterId) => {
    return fetch(`${remoteURL}/characters/${characterId}`)
    .then(response => response.json())
};

//! This function will add a character to the database.
export const addCharacter = (newCharacter) => {
    return fetch(`${remoteURL}/characters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: newCharacter.name,
            userId: newCharacter.userId,
            level: parseInt(newCharacter.level),
            race: newCharacter.race,
            class: newCharacter.class,
            alignment: newCharacter.alignment,
            experience: parseInt(newCharacter.experience),
            hitPoints: parseInt(newCharacter.hitPoints),
            armorClass: parseInt(newCharacter.armorClass),
            proficiencyBonus: parseInt(newCharacter.proficiencyBonus),
            strength: parseInt(newCharacter.strength),
            dexterity: parseInt(newCharacter.dexterity),
            constitution: parseInt(newCharacter.constitution),
            intelligence: parseInt(newCharacter.intelligence),
            wisdom: parseInt(newCharacter.wisdom),
            charisma: parseInt(newCharacter.charisma)
        })
    }).then(response => response.json())
};

//! This function will edit a character in the database.
export const editCharacter = (editedCharacter) => {
    return fetch(`${remoteURL}/characters/${editedCharacter.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedCharacter),
    }).then(response => response.json())
};

//! This function will delete a character from the database.
export const deleteCharacter = (characterId) => {
    return fetch(`${remoteURL}/characters/${characterId}`, {
      method: "DELETE"
    }).then(response => response.json())
};


//! This function will get all skills.
export const getSkills = () => {
    return fetch(`${remoteURL}/skills`)
    .then(response => response.json())
};

//! This function will get all saving throws.
export const getThrows = () => {
    return fetch(`${remoteURL}/throws`)
    .then(response => response.json())
};

//! This function will join a skill to a character.
export const addSkill = (skill) => {
    return fetch(`${remoteURL}/characterSkills`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(skill)
    }).then(response => response.json())
};

//! This function will join a saving throw to a character.
export const addThrow = (newThrow) => {
    return fetch(`${remoteURL}/characterThrows`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newThrow)
    }).then(response => response.json())
;}
   

//! This function will get a skill by it's name.
export const getSkillByName = (name) => {
    return fetch(`${remoteURL}/skills?name=${name}`)
    .then(response => response.json())
}

//! This function will get a skill by it's id.
export const getSkillById = (id) => {
    return fetch(`${remoteURL}/skills?id=${id}`)
    .then(response => response.json())
}

//! This function will get a saving throw by it's name.
export const getThrowByName = (name) => {
    return fetch(`${remoteURL}/throws?name=${name}`)
    .then(response => response.json())
}

//! This function will get a saving throw by it's id.
export const getThrowById = (id) => {
    return fetch(`${remoteURL}/throws?id=${id}`)
    .then(response => response.json())
}

//! This function will return an array that contains the skills of a given character.
export const getCharacterSkills = (id) => {
    return fetch(`${remoteURL}/characterSkills?characterId=${id}&_expand=skill`)
    .then(response => response.json())
}

//! This function will return an array that contains the saving throws of a given character.
export const getCharacterThrows = (id) => {
    return fetch(`${remoteURL}/characterThrows?characterId=${id}&_expand=throw`)
    .then(response => response.json())
}

//! This function will delete a skill from a character.
export const deleteSkill = (id) => {
    return fetch(`${remoteURL}/characterSkills/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
}

//! This function will delete a saving throw from a character.
export const deleteThrow = (id) => {
    return fetch(`${remoteURL}/characterThrows/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
}