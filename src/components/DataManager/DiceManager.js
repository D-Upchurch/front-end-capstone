import { floor, random } from 'mathjs'

//! This function will roll a d4.
export const rollD4 = () => {
    let roll = Math.floor(Math.random() * 4) + 1;
    console.log(`Rolled: ${roll}`);
};

//! This function will roll a d6.
export const rollD6 = () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
};
//! This function will roll a d8.
export const rollD8 = () => {
    let roll = Math.floor(Math.random() * 8) + 1;
    console.log(`Rolled: ${roll}`);
};
//! This function will roll a d10.
export const rollD10 = () => {
    let roll = Math.floor(Math.random() * 10) + 1;
    console.log(`Rolled: ${roll}`);
};
//! This function will roll a d12.
export const rollD12 = () => {
    let roll = Math.floor(Math.random() * 12) + 1;
    console.log(`Rolled: ${roll}`);
};
//! This function will roll a d20.
export const rollD20 = () => {
    let roll = Math.floor(Math.random() * 20) + 1;
    console.log(`Rolled: ${roll}`);
};