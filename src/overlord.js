
import process from 'node:process';
import { logPath, moveUp, seedee } from "./general/navigation.js";
import { listFiles } from './general/list.js';
import { osExecutor } from './os-scripts/osExecutor.js';
import { seeaytee } from './fs-scripts/cat.js';
import { aydeedee } from './fs-scripts/add.js';
import { aren } from './fs-scripts/rn.js';
import { arem } from './fs-scripts/rm.js';
import { seepee } from './fs-scripts/cp.js';
import { emmvee } from './fs-scripts/mv.js';
import { hash } from './fs-scripts/hash.js';
import { zip } from './zlib-scripts/zip.js';
import { cwd, chdir } from 'process'
import { homedir } from 'os'


// utils (Todo move to separate files)
const parseArgs = () => {
    const propNameStirngMatch = /^--.*$/
    const props =  Object.values(process.argv)
    const propsToDisplay = {}
    props.map( (variable, idx) => {
        if (propNameStirngMatch.test(variable)) {
            const propData = variable.split("=");
            propsToDisplay[propData[0]] = propData[1]
        }

    })
    return propsToDisplay
};

const overlord = async () => {
    const initialLaunchData = parseArgs();
    chdir(homedir())
    let userName = "";

    if (initialLaunchData["--username"]) {
        userName = initialLaunchData["--username"]
        console.log(`Welcome to the file manager, ${userName}!`)
    };

    process.on('SIGINT' , (data) => {
        console.log(`Thank you for using File Manager, ${userName} , goodbye!`);
        process.exit()
    })

     process.stdin.on('data' , async (line) => {
        const splitData = line.toString().trim().split(/\s+/g)
        const command = splitData[0]
        const args = splitData.filter(arg => {
            const testRegex = /^--.*$/
            return testRegex.test(arg)
        })

        if (command === 'up') {
            moveUp();
        } else if (command === 'cd') {
            const pathToNavigateTo = splitData[1];
            seedee(pathToNavigateTo);
        } else if (command === "ls") {
            listFiles();
        } else if (command === "os") {
            args.forEach(arg => {
                osExecutor(arg);
            })
        } else if (command === "cat") {
            const pathToRead = splitData[1];
            await seeaytee(pathToRead)
        } else if (command === "add") {
            const pathToRead = splitData[1];
            await aydeedee(pathToRead)
        } else if( command === "rn") {
            const oldPath = splitData[1];
            const newPath = splitData[2];
            await aren(oldPath, newPath)
        } else if (command === "rm") {
            const pathToRemove = splitData[1];
            await arem(pathToRemove)
        } else if (command === "cp") {
            const oldPath = splitData[1];
            const newPath = splitData[2];
            await seepee(oldPath, newPath)
        } else if (command === "mv") {
            const oldPath = splitData[1];
            const newPath = splitData[2];
            await emmvee(oldPath, newPath);
        } else if (command === "hash") {
            const path = splitData[1];
            await hash(path);
        } else if (command === "compress") {
            const oldPath = splitData[1];
            const newPath = splitData[2];
            await zip(oldPath,newPath, "compress")
        } else if (command === "decompress") {
            const oldPath = splitData[1];
            const newPath = splitData[2];
            await zip(oldPath,newPath, "decompress")
        } else if (command === ".exit") {
            console.log(`Thank you for using File Manager, ${userName} , goodbye!`);
            process.exit();
        } else {
            console.log('Unknown Command');
        }
    })

   
};

overlord();




