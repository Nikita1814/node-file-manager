import { chdir, cwd } from 'node:process'
 
export const moveUp = function () {
    try {
        chdir("../")
        logPath()
      } catch {
        console.log("You've reached the top, buddy")
      }
}

export const seedee = function(path) {
    try {
        chdir(path)
        logPath()
      } catch {
        console.log("The path is incorrect or the folder does not exist")
      }
}

export const logPath = function(){
    console.log(`You are currently in ${cwd()}`)
}