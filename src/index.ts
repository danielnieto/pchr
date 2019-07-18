import { Command, flags } from '@oclif/command'
import { Watcher } from '../lib/watcher';
import chalk from 'chalk';

class Pchr extends Command {
    static description = 'watch css changes on within Placeit repo folder and refresh Chrome tab';

    static flags = {
        version: flags.version({ char: 'v' }),
        help: flags.help({ char: 'h' })
    }

    static args = [{
        name: 'folder',
        description: 'Placeit repo folder location, defaults to current folder'
    }]

    async run() {
        const { args } = this.parse(Pchr);

        const folder = args.folder || process.cwd();
        this.log(chalk.bgMagentaBright(`PCHR will watch for css file changes on ${folder}`));

        const watcher = new Watcher(folder);

    }
}

export = Pchr
