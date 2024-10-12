
import {createWriteStream, access} from "node:fs"
import process from 'node:process';

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
    // let currentPath = import.meta.dirname;
    // const baseDir = import.meta.dirname
    let currentPath = 'src';
    const baseDir = 'src'
    console.log(process.cwd());

    const moveUp = function () {
        if (currentPath !== baseDir) {
            const splitPath = currentPath.split('/');
            splitPath.pop();
            currentPath = splitPath.join('/')
            console.log(`You are currently in ${currentPath}`)
        } else {
            console.log("You've reached the top, buddy")
        }
    }
    
    const seedee = async function(path) {
        access(path, (e) => {
            if (e) {
                return
            } else {
                currentPath = path
                console.log(`You are currently in ${currentPath}`)
            }
        })
    }

    if (initialLaunchData["--username"]) {
        userName = initialLaunchData["--username"]
        console.log(`Welcome to the file manager, ${userName}!`)
        console.log(`You are currently in ${currentPath}`)
    };

     process.stdin.on('data' , (line) => {
        
        // console.log(data.toString());
        const splitData = line.toString().trim().split(/\s+/g)
        const command = splitData[0]
        console.log(command, command === 'up');
        if (command === 'up') {
            moveUp()
        } else if (command === 'cd') {
            const pathToNavigateTo = splitData[1];
            seedee(pathToNavigateTo);
        }

    })

    // process.stdin.on('SIGINT' , (data) => {
    //     console.log(`Thank you for using File Manager, ${userName} , goodbye!`);
    // })
};

overlord();