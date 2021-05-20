import { userStorageKey } from '../auth/authSettings';
import { urlHelper } from './UrlHelper'

const remoteURL = urlHelper()

//! This function will make a fetch request to an external api (Open5e) to get a list of spells.
export const getSpells = () => {
    return fetch(`https://api.open5e.com/spells/?limit=350`)
        .then(Response => Response.json()).then(parsed => { return parsed })
};

// //! This function will filter the spells by class.
// export const getSpellsByClass = (class) => {
//     return fetch(`api.open5e.com/spells`)
// }

//! This function will get the information for a single given spell.
export const getSpellBySlug = (slug) => {
    return fetch(`https://api.open5e.com/spells/?slug=${slug}`)
        .then(Response => Response.json()).then(parsed => { return parsed })
};

//! This function will add a given spell to the user's spellbook.
export const addSpell = (newSpell) => {
    return fetch(`${remoteURL}/spells`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: parseInt(sessionStorage.getItem(userStorageKey)),
            name: newSpell.name,
            school: newSpell.school,
            level: newSpell.level,
            components: newSpell.components,
            class: newSpell.dnd_class,
            description: newSpell.desc,
            higherLevels: newSpell.higher_level
        })
    })
        .then(Response => Response.json())
};

//! This function will return a user's spells they have added to their book.
export const getSpellsByUserId = (id) => {
    return fetch(`${remoteURL}/spells?userId=${id}`)
        .then(Response => Response.json())
};

//! This function will remove a spell from a user's spell book.
export const deleteSpell = (id) => {
    return fetch(`${remoteURL}/spells/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
};