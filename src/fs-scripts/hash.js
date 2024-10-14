import {createHash} from "node:crypto"
import { createReadStream } from "node:fs";
import { resolve } from "path";
import { cwd } from "node:process";

export const hash = async (path) => {
    try {
    const workingFolder = cwd();
    const pathToHash =  resolve(workingFolder, path)
    const hash = createHash('sha256')
    const readStream = createReadStream(pathToHash)
    readStream.on('readable', () => {
        const data = readStream.read()
        if(data) {
            console.log(hash.update(data).digest('hex'));
        }
    })
    } catch (err) {
        console.log('failed to hash, file does not exist')
    }
};
