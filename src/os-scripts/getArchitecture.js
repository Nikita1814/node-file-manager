import { arch } from 'os'
export function getArchitecture () {
    console.log(JSON.stringify(arch())); 
}