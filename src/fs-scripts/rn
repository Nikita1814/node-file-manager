import {rename} from "node:fs" 

export const aren = async (originalPath, newName) => {
    try {
        await rename(originalPath, newName)
    } catch (err) {
        console.log('The paths you have provided are incorrect')
    }
};
