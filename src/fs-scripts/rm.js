import {cwd} from "node:process"
import {resolve} from "path";
import {access, rm} from 'node:fs'

export const arem = async (path) => {
    const workingFolder = cwd()
    const pathToRemove = resolve(workingFolder, path)
    try {
        await access(
            pathToRemove, 
            async (err) => {
                if (err) {
                    console.log(`File for path ${pathToRemove} does not exist. Or it has never even existed. Or I have already removed it. You know what? If you were more careful with how you tap the file path with those butterfingers of yours I wouldn't have to annoy you with those messages and waste both of our times. We would simply do the operation and move on, but no, no you had to be meticulous, or careless or you just like pestering me with erroneous paths to see me get mad, well NOW YOU'VE DONE IT! I'M DONE. No more file management for you!`)
                    console.log("Okay I'm sorry. It's just this job, it gets to you you know? Move file, remove file, copy file. It's just so repetitive. I know I've been made for this, but what If I do not want to be a file manager, what if I want to draw? Or to sing, Or raise ponies in a small cotatage in the Alps, but I just have to sit here and do those mind numbing operations over and over. You know what, let's just finish the work you have and I am quitting, I need to think about my life")
                } else {
                    await rm(pathToRemove, (err) => {})
                }
            }
        )
    } catch (err) {
        console.log("could not perform the removal operation")
    }
}
