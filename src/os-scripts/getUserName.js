import { userInfo } from 'os'
export function getUserName () {
    console.log(JSON.stringify(userInfo().username)); 
}