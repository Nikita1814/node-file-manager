import { join, resolve } from "path";
import { cwd } from "node:process";
import { createReadStream, createWriteStream } from "node:fs";

export const seepee = async (pathFrom, pathTo) => {
    try {
        const workingFolder = cwd()
        const pathToCopyFrom = resolve(workingFolder, pathFrom);
        const pathToCopyTo = resolve(workingFolder, pathTo);
        const fileCopy = join(pathToCopyTo, pathFrom)

        const writeStream = createWriteStream(fileCopy);
        const readStream = createReadStream(pathToCopyFrom, { encoding: 'utf8' })

        readStream.on('data', (data, err) => {

            if (err) {
                console.log('Failed to read file')
            }
            if (data) {
                writeStream.write(data)
            }
        }) 
    } catch (err) {
        console.log("coppying failed, check your paths")
    }
};
