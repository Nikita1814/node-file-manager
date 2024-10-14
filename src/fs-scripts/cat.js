import { resolve } from "path";
import { cwd } from "node:process";
import { createReadStream } from "node:fs";

export const seeaytee = async (path) => {
    try {
        const workingFolder = cwd()
        const pathToRead = resolve(workingFolder, path)

        const readStream = createReadStream(pathToRead, { encoding: 'utf8' })

        readStream.on('data', (data, err) => {
            if (err) {
                console.log("FS operation failed");
            }
            if (data) {
                console.log(data)
            }
        }) 

    } catch(err) {
        console.log('There is no such file in the working directory')
    }
};

