import {rename} from "fs/promises" ;
import { resolve } from "path";
import { cwd } from "node:process";

export const aren = async (originalPath, newName) => {
    try {
        const workingFolder = cwd()
        const pathToRename = resolve(workingFolder, originalPath)
        const pathToRenameTo = resolve(workingFolder, newName)
        await rename(pathToRename, pathToRenameTo)
    } catch (err) {
        console.log('The paths you have provided are incorrect')
    }
};
