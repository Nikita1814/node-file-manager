import {writeFile, access} from "node:fs"
import { resolve } from "path";
import { cwd } from "node:process";

export const aydeedee = async (path) => {
    try {
        const workingFolder = cwd()
        const pathToCreate = resolve(workingFolder, path)
        await access(
            pathToCreate, 
            async (err) => {
                if (err) {
                    await writeFile(pathToCreate, '', (err) => {})
                } else {
                    console.log("A file with that name already existst")
                }
            }
        );
    } catch (err) {
        console.log("the path you have provided is incorrect")
    }
};

await aydeedee();