import { homedir } from 'os'
export function getHomeDir () {
    console.log(JSON.stringify(homedir())); 
}