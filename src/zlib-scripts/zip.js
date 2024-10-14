import {createReadStream, createWriteStream} from "node:fs";
import {createBrotliCompress, createBrotliDecompress } from "node:zlib";
import {cwd} from "process";
import { resolve } from "path";


export const zip = async (pathToCompress, pathToSave, operation) => {

    try {
        const workingFolder = cwd();
        const pathToCompressFrom = resolve(workingFolder, pathToCompress);
        const pathToSaveTo = resolve(workingFolder, pathToSave);

        const source = createReadStream(pathToCompressFrom);
        const destination = createWriteStream(pathToSaveTo);
        
        if (operation === "compress") {
            const brotli = createBrotliCompress();
            source.pipe(brotli).pipe(destination)
        } else if (operation === "decompress") {
            const brotli = createBrotliDecompress();
            source.pipe(brotli).pipe(destination)
        }
    } catch (err) {
        console.log('Zip operation failed');
    }
}

