import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
console.log(chalk.blue("Gerando senha..."));
const password = await handle();
console.log(chalk.green("Senha gerada:"));
console.log(chalk.yellow(password));
}


export default createPassword;