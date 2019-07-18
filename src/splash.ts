import chalk from 'chalk';

export class Splash {
    static message = `
██████╗  ██████╗██╗  ██╗██████╗
██╔══██╗██╔════╝██║  ██║██╔══██╗
██████╔╝██║     ███████║██████╔╝
██╔═══╝ ██║     ██╔══██║██╔══██╗
██║     ╚██████╗██║  ██║██║  ██║
╚═╝      ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝
`

    static show() {
        console.log(chalk.greenBright(Splash.message));
    }
}
