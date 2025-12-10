import chalk from "chalk";

const qrcodePrompt = [
{
 name: "link",
 description: chalk.blue("Digite o link do seu site"),
},
{
    name: "type",
    description: chalk.blue("Escolha o tipo de QR Code(1 - NORMAL) ou (2 - TERMINAL)"),
    pattern: /^[1-2]$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true,
}
]

export default qrcodePrompt;