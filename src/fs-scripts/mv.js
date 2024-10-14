import { seepee } from "./cp.js"
import { arem } from "./rm.js"

export const emmvee = async(oldPath, newPath) =>  {
    await seepee(oldPath, newPath);
    await arem(oldPath)
}