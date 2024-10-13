
import process from 'node:process';
import { logPath, moveUp, seedee } from "./general/navigation.js";
import { listFiles } from './general/list.js';


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
    console.log('I live!')
    const initialLaunchData = parseArgs();

    let userName = "";
    console.log(process.cwd());

    if (initialLaunchData["--username"]) {
        userName = initialLaunchData["--username"]
        console.log(`Welcome to the file manager, ${userName}!`)
        console.log(logPath())
    };

     process.stdin.on('data' , (line) => {
        const splitData = line.toString().trim().split(/\s+/g)
        const command = splitData[0]
        if (command === 'up') {
            moveUp();
        } else if (command === 'cd') {
            const pathToNavigateTo = splitData[1];
            seedee(pathToNavigateTo);
        } else if (command === "ls") {
            listFiles();
        }

    })

    // process.stdin.on('SIGINT' , (data) => {
    //     console.log(`Thank you for using File Manager, ${userName} , goodbye!`);
    // })
};

overlord();




