
import {readdir} from "node:fs"
import { cwd } from 'node:process'

export const listFiles = async function() {
    const path = cwd()
     
    readdir(path, {withFileTypes: true}, (err, files) => {
        const filesTable = []
        if (err) {
            console.log(err)
        }

        if (files) {
            files.forEach(file => {
                filesTable.push({Name: file.name, Type: file.isFile() ? 'file' : 'directory'})
            });
        }
        console.table(filesTable)
    })
}
