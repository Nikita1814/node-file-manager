import { readFile } from "node:fs";
import { resolve } from "path";
import { cwd } from "node:process";

export const seeaytee = async (path) => {
    try {
        const workingFolder = cwd()
        const pathToRead = resolve(workingFolder, path)
        readFile(pathToRead, 'utf8', (err, data) => {
            if (err) console.log("FS operation failed");
            console.log(data)
        })
    } catch(err) {
        console.log('There is no such file in the working directory')
    }
};

