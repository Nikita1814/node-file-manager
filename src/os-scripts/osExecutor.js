import { getArchitecture } from "./getArchitecture.js";
import { getEol } from "./getEol.js";
import { getCpus } from "./getCpus.js";
import { getHomeDir } from "./getHomeDir.js";
import { getUserName } from "./getUserName.js";

export function osExecutor(arg) {
    switch (arg) {
        case "--EOL":
        getEol();
        break;
        case "--cpus":
        getCpus();
        break;
        case "--homedir":
        getHomeDir();
        break;
        case "--username":
        getUserName();
        break;
        case "--architecture":
        getArchitecture();
        break;
    }
}