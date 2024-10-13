import { cpus } from 'os'
export function getCpus() {

    const cpusTable = cpus().map((cpu) => {
        return {
            model: cpu.model,
            speed: `${(cpu.speed / 1000).toFixed(2)} GHz`
        }
    })
    console.table(cpusTable); 
}