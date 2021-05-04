//! This function will make a fetch request to an external api (Open5e) to get a list of spells.
export const getSpells = () => {
    return fetch(`api.open5e.com/spells`)
    .then(response => response.json())
};

// //! This function will filter the spells by class.
// export const getSpellsByClass = (class) => {
//     return fetch(`api.open5e.com/spells`)
// }