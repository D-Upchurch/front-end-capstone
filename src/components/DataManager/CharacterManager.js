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
        body: JSON.stringify(newCharacter)
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

