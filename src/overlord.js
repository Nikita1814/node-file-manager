
// import {createWriteStream} from "node:fs"
import process from 'node:process';


const parseArgs = () => {
    const propNameStirngMatch = /^--.*$/
    const props =  Object.values(process.argv)
    const propsToDisplay = {}
    props.map( (variable, idx) => {
        if (propNameStirngMatch.test(variable)) {
            const propData = variable.split("=")
            console.log(propData)
            propsToDisplay[propData[0]] = propData[1]
        }

    })
    return propsToDisplay
};


const overlord = () => {


    console.log('I live!')
    const initialLaunchData = parseArgs();
    let userName = ""
    let currentPath = ""
    if (initialLaunchData["--username"]) {
        userName = initialLaunchData["--username"]
        console.log(`Welcome to the file manager, ${userName}!`)
    }
    // const currentPath = path.join('./',import.meta.dirname);

    const move = function (direction) {
    //  switch (direction) {

    //  }
    }


     process.stdin.on('data' , (data) => {
        console.log(data.toString());
    })
};

overlord();