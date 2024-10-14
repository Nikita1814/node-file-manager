import { seepee } from "./cp"
import { arem } from "./rm"

export const emmvee = async(oldPath, newPath) =>  {
    await seepee(oldPath, newPath);
    await arem(oldPath)
}